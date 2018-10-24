import { glTF, glTFScene, glTFNode, glTFMesh, glTFMeshPrimitives, glTFMaterial } from "./gltftypes";
import { GLTFAsset } from "./asset";
import { Node } from "./node";
import { Scene } from "./scene";
import { MeshMode, ComponentType, DataType, VertexColorMode, RGBColor, RGBAColor, AlphaMode } from "./types";
import { Mesh } from "./mesh";
import { Buffer, BufferView, BufferAccessorInfo } from "./buffer";
import { Vertex } from "./vertex";
import { Material } from "./material";
import { Texture } from "./texture";

export function addScenes(gltf: glTF, asset: GLTFAsset): void {
  gltf.scene = asset.defaultScene;

  asset.forEachScene((scene: Scene) => {
    addScene(gltf, scene);
  });
}

function addScene(gltf: glTF, scene: Scene): void {
  if (!gltf.scenes)
    gltf.scenes = [];

  const gltfScene: glTFScene = {};
  if (scene.name)
    gltfScene.name = scene.name;

  scene.forEachNode((node: Node) => {
    if (!gltfScene.nodes)
      gltfScene.nodes = [];

    const index = addNode(gltf, node);
    gltfScene.nodes.push(index);
  });

  gltf.scenes.push(gltfScene);
}

function addNode(gltf: glTF, node: Node): number {
  if (!gltf.nodes)
    gltf.nodes = [];

  const gltfNode: glTFNode = {};
  if (node.name)
    gltfNode.name = node.name;

  const translation = node.getTranslation();
  if (translation.x !== 0 || translation.y !== 0 || translation.z !== 0)
    gltfNode.translation = translation.toArray();

  const rotation = node.getRotationQuaternion();
  if (rotation.x !== 0 || rotation.y !== 0 || rotation.z !== 0 || rotation.w !== 1)
    gltfNode.rotation = rotation.toArray();

  const scale = node.getScale();
  if (scale.x !== 1 || scale.y !== 1 || scale.z !== 1)
    gltfNode.scale = scale.toArray();

  const addedIndex = gltf.nodes.length;
  gltf.nodes.push(gltfNode);

  if (node.mesh) {
    gltfNode.mesh = addMesh(gltf, node.mesh);
  }
  else {
    node.forEachNode((node: Node) => {
      if (!gltfNode.children)
        gltfNode.children = [];

      const index = addNode(gltf, node);
      gltfNode.children.push(index);
    });
  }

  return addedIndex;
}

function addMesh(gltf: glTF, mesh: Mesh): number {
  if (!gltf.meshes)
    gltf.meshes = [];

  if (mesh.mode !== MeshMode.TRIANGLES)
    throw "MeshMode other than TRIANGLES not currently supported";

  addMaterials(gltf, mesh.material);

  const gltfMesh: glTFMesh = {
    primitives: [],
  };

  const addedIndex = gltf.meshes.length;
  gltf.meshes.push(gltfMesh);

  const meshBuffer = new Buffer();
  const meshBufferIndex = addBuffer(gltf, meshBuffer);

  const vertexBufferView = meshBuffer.addBufferView(ComponentType.FLOAT, DataType.VEC3);
  const vertexBufferIndex = addBufferView(gltf, vertexBufferView, meshBufferIndex);

  const vertexNormalBufferView = meshBuffer.addBufferView(ComponentType.FLOAT, DataType.VEC3);
  const vertexNormalBufferIndex = addBufferView(gltf, vertexNormalBufferView, meshBufferIndex);

  const vertexUVBufferView = meshBuffer.addBufferView(ComponentType.FLOAT, DataType.VEC2);
  const vertexUVBufferIndex = addBufferView(gltf, vertexUVBufferView, meshBufferIndex);

  let vertexColorBufferView: BufferView | undefined;
  let vertexColorBufferIndex: number | undefined;

  function _ensureColorBufferView() {
    if (vertexColorBufferView)
      return;

    vertexColorBufferView = meshBuffer.addBufferView(ComponentType.UNSIGNED_BYTE, DataType.VEC3);
    vertexColorBufferIndex = addBufferView(gltf, vertexColorBufferView, meshBufferIndex);
  }

  function _completeMeshPrimitive(materialIndex: number): glTFMeshPrimitives {
    const vertexBufferAccessorInfo = vertexBufferView.endAccessor();
    const vertexNormalBufferAccessorInfo = vertexNormalBufferView.endAccessor();
    const vertexUVBufferAccessorInfo = vertexUVBufferView.endAccessor();

    const primitive: glTFMeshPrimitives = {
      attributes: {
        POSITION: addAccessor(gltf, vertexBufferIndex, vertexBufferAccessorInfo),
        NORMAL: addAccessor(gltf, vertexNormalBufferIndex, vertexNormalBufferAccessorInfo),
        TEXCOORD_0: addAccessor(gltf, vertexUVBufferIndex, vertexUVBufferAccessorInfo),
      },
      mode: mesh.mode,
    };
    if (materialIndex >= 0) {
      primitive.material = materialIndex;

      // Only add color data if it is per-face/vertex.
      const material = mesh.material[materialIndex];
      if (material.vertexColorMode !== VertexColorMode.NoColors) {
        const vertexColorBufferAccessorInfo = vertexColorBufferView!.endAccessor();
        primitive.attributes["COLOR_0"] =
          addAccessor(gltf, vertexColorBufferIndex!, vertexColorBufferAccessorInfo);
      }
    }

    return primitive;
  }

  let lastMaterialIndex: number | null = null;
  mesh.forEachFace((v1: Vertex, v2: Vertex, v3: Vertex, color: RGBColor | RGBAColor | undefined, materialIndex: number) => {
    let currentMaterial: Material | null = null;
    if (materialIndex >= 0)
      currentMaterial = mesh.material[materialIndex];

    // Need to start new accessors
    if (lastMaterialIndex !== materialIndex) {
      // And end the previous ones.
      if (lastMaterialIndex !== null) {
        const primitive = _completeMeshPrimitive(lastMaterialIndex);
        gltfMesh.primitives.push(primitive);
      }

      vertexBufferView.startAccessor();
      vertexNormalBufferView.startAccessor();
      vertexUVBufferView.startAccessor();
      if (currentMaterial && currentMaterial.vertexColorMode !== VertexColorMode.NoColors) {
        _ensureColorBufferView();
        vertexColorBufferView!.startAccessor();
      }

      lastMaterialIndex = materialIndex;
    }

    // Positions
    vertexBufferView.push(v1.x);
    vertexBufferView.push(v1.y);
    vertexBufferView.push(v1.z);

    vertexBufferView.push(v2.x);
    vertexBufferView.push(v2.y);
    vertexBufferView.push(v2.z);

    vertexBufferView.push(v3.x);
    vertexBufferView.push(v3.y);
    vertexBufferView.push(v3.z);

    // Vertex normals
    vertexNormalBufferView.push(v1.normalX);
    vertexNormalBufferView.push(v1.normalY);
    vertexNormalBufferView.push(v1.normalZ);

    vertexNormalBufferView.push(v2.normalX);
    vertexNormalBufferView.push(v2.normalY);
    vertexNormalBufferView.push(v2.normalZ);

    vertexNormalBufferView.push(v3.normalX);
    vertexNormalBufferView.push(v3.normalY);
    vertexNormalBufferView.push(v3.normalZ);

    // Texture UV coords
    vertexUVBufferView.push(v1.u);
    vertexUVBufferView.push(v1.v);

    vertexUVBufferView.push(v2.u);
    vertexUVBufferView.push(v2.v);

    vertexUVBufferView.push(v3.u);
    vertexUVBufferView.push(v3.v);

    if (currentMaterial) {
      // Vertex colors
      switch (currentMaterial.vertexColorMode) {
        case VertexColorMode.FaceColors:
          // Just duplicate the face colors 3 times.
          for (let v = 0; v < 3; v++) {
            addColorToBufferView(vertexColorBufferView!, color || new RGBColor());
          }
          break;

        case VertexColorMode.VertexColors:
          addColorToBufferView(vertexColorBufferView!, v1.color || new RGBColor());
          addColorToBufferView(vertexColorBufferView!, v2.color || new RGBColor());
          addColorToBufferView(vertexColorBufferView!, v3.color || new RGBColor());
          break;

        // NoColors? We won't have an accessor.
      }
    }
  });

  if (lastMaterialIndex !== null) {
    const primitive = _completeMeshPrimitive(lastMaterialIndex);
    gltfMesh.primitives.push(primitive);
  }

  finalizeBuffer(gltf, meshBufferIndex);
  finalizeBufferView(gltf, vertexBufferIndex);
  finalizeBufferView(gltf, vertexNormalBufferIndex);
  finalizeBufferView(gltf, vertexUVBufferIndex);
  if (typeof vertexColorBufferIndex === "number")
    finalizeBufferView(gltf, vertexColorBufferIndex);

  return addedIndex;
}

function addColorToBufferView(bufferView: BufferView, color: RGBColor | RGBAColor) {
  bufferView.push((color.r * 255) | 0);
  bufferView.push((color.g * 255) | 0);
  bufferView.push((color.b * 255) | 0);
  // if (color instanceof RGBAColor) {
  //   bufferView.push((color.a * 255) | 0);
  // }
  // else {
  //   bufferView.push(0xFF);
  // }
}

function addBuffer(gltf: glTF, buffer: Buffer): number {
  if (!gltf.buffers)
    gltf.buffers = [];

  const addedIndex = gltf.buffers.length;
  gltf.buffers.push({
    byteLength: -1,
    extras: buffer, // Removed after finalized
  });

  return addedIndex;
}

function finalizeBuffer(gltf: glTF, bufferIndex: number): void {
  const gltfBuffer = gltf.buffers![bufferIndex];
  const buffer: Buffer = gltfBuffer.extras;
  const arrayBuffer = buffer.getArrayBuffer();

  gltfBuffer.byteLength = arrayBuffer.byteLength;
  (gltfBuffer.uri as any) = arrayBuffer; // Still not totally finalized, see stringify
  delete gltfBuffer.extras;
}

function addBufferView(gltf: glTF, bufferView: BufferView, bufferIndex: number): number {
  if (!gltf.bufferViews)
    gltf.bufferViews = [];

  const addedIndex = gltf.bufferViews.length;
  gltf.bufferViews.push({
    buffer: bufferIndex,
    byteLength: -1,
    extras: bufferView, // Removed after finalized
  });

  return addedIndex;
}

function finalizeBufferView(gltf: glTF, bufferViewIndex: number): void {
  const gltfBufferView = gltf.bufferViews![bufferViewIndex];
  const bufferView: BufferView = gltfBufferView.extras;

  gltfBufferView.byteOffset = bufferView.getByteOffset();
  gltfBufferView.byteLength = bufferView.getSize();
  delete gltfBufferView.extras;
}

function addAccessor(gltf: glTF, bufferViewIndex: number, accessorInfo: BufferAccessorInfo): number {
  if (!gltf.accessors)
    gltf.accessors = [];

  const addedIndex = gltf.accessors.length;
  gltf.accessors.push({
    bufferView: bufferViewIndex,
    byteOffset: accessorInfo.byteOffset,
    componentType: accessorInfo.componentType,
    count: accessorInfo.count,
    type: accessorInfo.type,
  });

  return addedIndex;
}

function addMaterials(gltf: glTF, materials: Material[]): number[] {
  const indices = [];
  for (const material of materials) {
    indices.push(addMaterial(gltf, material));
  }
  return indices;
}

function addMaterial(gltf: glTF, material: Material): number {
  if (!gltf.materials)
    gltf.materials = [];

  const gltfMaterial: glTFMaterial = {};
  if (material.name)
    gltfMaterial.name = material.name;
  if (material.alphaMode !== AlphaMode.OPAQUE)
    gltfMaterial.alphaMode = material.alphaMode;
  if (material.alphaCutoff !== 0.5)
    gltfMaterial.alphaCutoff = material.alphaCutoff;
  if (material.doubleSided)
    gltfMaterial.doubleSided = true;
  if (material.pbrMetallicRoughness) {
    if (material.pbrMetallicRoughness.baseColorFactor) {
      gltfMaterial.pbrMetallicRoughness = {};
      gltfMaterial.pbrMetallicRoughness.baseColorFactor = material.pbrMetallicRoughness.baseColorFactor;
    }
    if (material.pbrMetallicRoughness.baseColorTexture) {
      if (!gltfMaterial.pbrMetallicRoughness)
        gltfMaterial.pbrMetallicRoughness = {};
      const textureIndex = addTexture(gltf, material.pbrMetallicRoughness.baseColorTexture);
      gltfMaterial.pbrMetallicRoughness.baseColorTexture = { index: textureIndex };
    }
  }

  const addedIndex = gltf.materials.length;
  gltf.materials.push(gltfMaterial);

  return addedIndex;
}

function addTexture(gltf: glTF, texture: Texture): number {
  if (!gltf.textures)
    gltf.textures = [];

  const gltfTexture = {
    sampler: addSampler(gltf, texture),
    source: addImage(gltf, texture.image),
  };

  const addedIndex = gltf.textures.length;
  gltf.textures.push(gltfTexture);

  return addedIndex;
}

function addImage(gltf: glTF, image: HTMLImageElement | HTMLCanvasElement): number {
  if (!gltf.images)
    gltf.images = [];

  const gltfImage = {};
  (gltfImage as any).uri = image; // Processed later

  for (let i = 0; i < gltf.images.length; i++) {
    if (image === (gltf.images[i].uri as any)) {
      return i; // Already had an identical image.
    }
  }

  const addedIndex = gltf.images.length;
  gltf.images.push(gltfImage);

  return addedIndex;
}

function addSampler(gltf: glTF, texture: Texture): number {
  if (!gltf.samplers)
    gltf.samplers = [];

  const gltfSampler = {
    wrapS: texture.wrapS,
    wrapT: texture.wrapT,
  };

  for (let i = 0; i < gltf.samplers.length; i++) {
    if (objectsEqual(gltfSampler, gltf.samplers[i])) {
      return i; // Already had an identical sampler.
    }
  }

  const addedIndex = gltf.samplers.length;
  gltf.samplers.push(gltfSampler);

  return addedIndex;
}

function objectsEqual(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
