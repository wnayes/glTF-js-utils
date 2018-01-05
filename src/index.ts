export { GLTFAsset } from "./asset";
export { Scene } from "./scene";
export { Node } from "./node";
export { Mesh } from "./mesh";
export { Material } from "./material";
export { Texture } from "./texture";
export { Vertex } from "./vertex";
export { XYZPair, Quaternion } from "./math";
export { glTFAssetFromTHREE } from "./threejs";

import { GLTFAsset } from "./asset";
import { Scene } from "./scene";
import { Node } from "./node";
import { Mesh } from "./mesh";
import { Material } from "./material";
import { Texture } from "./texture";
import { Vertex } from "./vertex";
import { XYZPair, Quaternion } from "./math";

import { Buffer, BufferView, BufferAccessorInfo } from "./buffer";
import { AlphaMode, ComponentType, DataType, MeshMode, WrappingMode } from "./types";

import * as jsz from "jszip";

export interface GLTFExportOptions {
  /** When passed, create a ZIP file with the glTF and assets. */
  jsZip?: jsz;

  /** Controls how buffers are outputted. */
  bufferOutputType?: BufferOutputType;

  /** Controls how texture images are outputted. */
  imageOutputType?: ImageOutputType;

  /** Size of indentation to use when stringify-ing the glTF model (default: 4) */
  jsonSpacing?: number;
}

export enum BufferOutputType {
  /** Create separate files for binary buffers (default) */
  External,

  /** Embed buffers as data URIs. */
  DataURI,
}

export enum ImageOutputType {
  /** Create separate files for images (default) */
  External,

  /** Embed images as data URIs. */
  DataURI,
}

export type GLTFExportType = { [filename: string]: any };

/**
 * Creates a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options
 * @returns An object, each key pointing to a file.
 * If options includes a JSZip reference, the a Promise to receive a ZIP blob
 * is returned instead.
 */
export function exportGLTF(asset: GLTFAsset, options?: GLTFExportOptions): GLTFExportType | Promise<Blob> {
  options = options || {};

  const gltf: glTF = {
    asset: {
      version: "2.0",
      copyright: asset.copyright,
      generator: asset.generator,
    },
  };

  addScenes(gltf, asset);

  let currentData = 1;
  let currentImg = 1;

  const output: { [filename: string]: any } = {};

  const jsonSpacing = options.hasOwnProperty("jsonSpacing") ? options.jsonSpacing : 4;
  const gltfString = JSON.stringify(gltf, (key: string, value: any) => {
    if (value instanceof ArrayBuffer) {
      if (options.bufferOutputType === BufferOutputType.DataURI) {
        return encodeBase64DataUri(value);
      }
      else { // BufferOutputType.External
        const filename = `data${currentData}.bin`;
        currentData++;
        output[filename] = value;
        return filename;
      }
    }
    if (value instanceof HTMLImageElement || value instanceof HTMLCanvasElement) {
      if (options.imageOutputType === ImageOutputType.DataURI) {
        return imageToDataURI(value);
      }
      else { // ImageOutputType.External
        const filename = `img${currentImg}.png`;
        currentImg++;
        output[filename] = imageToDataURI(value);
         // Strip off data uri schema
        output[filename] = output[filename].substr(output[filename].indexOf(",") + 1);
        return filename;
      }
    }

    return value;
  }, jsonSpacing);

  const modelName = "model.gltf";
  output[modelName] = gltfString;

  if (options.jsZip) {
    const zip = new options.jsZip();
    for (let filename in output) {
      if (filename !== modelName && typeof output[filename] === "string") { // An image
        zip.file(filename, output[filename], { base64: true });
      }
      else {
        zip.file(filename, output[filename]);
      }
    }
    return zip.generateAsync({ type: "blob" });
  }

  return output;
}

function addScenes(gltf: glTF, asset: GLTFAsset): void {
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

  const materials: number[] = addMaterials(gltf, mesh.material);

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

  let lastMaterialIndex: number | null = null;
  mesh.forEachFace((v1: Vertex, v2: Vertex, v3: Vertex, materialIndex: number) => {
    // Need to start new accessors
    if (lastMaterialIndex !== materialIndex) {
      // And end the previous ones.
      if (lastMaterialIndex !== null) {
        const vertexBufferAccessorInfo = vertexBufferView.endAccessor();
        const vertexNormalBufferAccessorInfo = vertexNormalBufferView.endAccessor();
        const vertexUVBufferAccessorInfo = vertexUVBufferView.endAccessor();

        gltfMesh.primitives.push({
          attributes: {
            POSITION: addAccessor(gltf, vertexBufferIndex, vertexBufferAccessorInfo),
            NORMAL: addAccessor(gltf, vertexNormalBufferIndex, vertexNormalBufferAccessorInfo),
            TEXCOORD_0: addAccessor(gltf, vertexUVBufferIndex, vertexUVBufferAccessorInfo),
          },
          material: lastMaterialIndex,
          mode: mesh.mode,
        });
      }

      vertexBufferView.startAccessor();
      vertexNormalBufferView.startAccessor();
      vertexUVBufferView.startAccessor();

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
  });

  if (lastMaterialIndex !== null) {
    const vertexBufferAccessorInfo = vertexBufferView.endAccessor();
    const vertexNormalBufferAccessorInfo = vertexNormalBufferView.endAccessor();
    const vertexUVBufferAccessorInfo = vertexUVBufferView.endAccessor();

    gltfMesh.primitives.push({
      attributes: {
        POSITION: addAccessor(gltf, vertexBufferIndex, vertexBufferAccessorInfo),
        NORMAL: addAccessor(gltf, vertexNormalBufferIndex, vertexNormalBufferAccessorInfo),
        TEXCOORD_0: addAccessor(gltf, vertexUVBufferIndex, vertexUVBufferAccessorInfo),
      },
      material: lastMaterialIndex,
      mode: mesh.mode,
    });
  }

  finalizeBuffer(gltf, meshBufferIndex);
  finalizeBufferView(gltf, vertexBufferIndex);
  finalizeBufferView(gltf, vertexNormalBufferIndex);
  finalizeBufferView(gltf, vertexUVBufferIndex);

  return addedIndex;
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
  const gltfBuffer = gltf.buffers[bufferIndex];
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
  const gltfBufferView = gltf.bufferViews[bufferViewIndex];
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
    gltfMaterial.pbrMetallicRoughness = {};
    //gltfMaterial.pbrMetallicRoughness.baseColorFactor = material.pbrMetallicRoughness.baseColorFactor;
    if (material.pbrMetallicRoughness.baseColorTexture) {
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

function imageToDataURI(image: HTMLImageElement | HTMLCanvasElement): string {
  let canvas;
  if (image instanceof HTMLImageElement) {
    canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
  }
  else {
    canvas = image;
  }

  return canvas.toDataURL();
}

function encodeBase64DataUri(buf: ArrayBuffer): string {
  const codes: string[] = [];
  const uint8arr = new Uint8Array(buf);
  for (let i = 0; i < uint8arr.length; i++) {
    codes.push(String.fromCharCode(uint8arr[i]));
  }
  const b64 = btoa(codes.join(""));
  const uri = "data:application/octet-stream;base64," + b64;
  return uri;
}

function objectsEqual(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

interface glTF {
  asset: {
    version: string;
    copyright?: string;
    generator?: string;
  };
  scene?: number;
  buffers?: glTFBuffer[];
  bufferViews?: glTFBufferView[];
  nodes?: glTFNode[];
  scenes?: glTFScene[];
  accessors?: glTFAccessor[];
  meshes?: glTFMesh[];
  textures?: glTFTexture[];
  images?: glTFImage[];
  samplers?: glTFSampler[];
  materials?: glTFMaterial[];
  skins?: any[];
  cameras?: any[];
  animations?: any[];
}

interface glTFBuffer {
  name?: string;
  byteLength: number;
  uri?: string;
  extras?: any;
}

interface glTFBufferView {
  name?: string;
  buffer: number;
  byteLength: number;
  byteOffset?: number;
  byteStride?: number;
  target?: number;
  extras?: any;
}

interface glTFNode {
  name?: string;
  camera?: number;
  children?: number[];
  mesh?: number;
  skin?: number;
  rotation?: [number, number, number, number];
  scale?: [number, number, number];
  translation?: [number, number, number];
  matrix?: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
  weights?: number;
}

interface glTFScene {
  name?: string;
  nodes?: number[];
}

interface glTFAccessor {
  name?: string;
  bufferView?: number;
  byteOffset?: number;
  componentType: ComponentType;
  normalized?: boolean;
  count: number;
  type: DataType;
  max?: number;
  min?: number;
  sparse?: object;
}

interface glTFMesh {
  name?: string;
  primitives: glTFMeshPrimitives[];
  weights?: number[];
}

interface glTFMeshPrimitives {
  attributes: glTFMeshPrimitiveAttributes;
  indices?: number;
  material?: number;
  mode?: MeshMode;
  targets?: any[];
}

interface glTFMeshPrimitiveAttributes {
  [type: string]: number; // type: glTFAttribute
}

type glTFAttribute =
  "POSITION"
  | "NORMAL"
  | "TANGENT"
  | "TEXCOORD_0"
  | "TEXCOORD_1"
  | "COLOR_0";

interface glTFTexture {
  name?: string;
  sampler?: number;
  source?: number;
}

interface glTFImage {
  name?: string;
  uri?: string;
  mimeType?: string;
  bufferView?: number;
}

interface glTFSampler {
  name?: string;
  magFilter?: number;
  minFilter?: number;
  wrapS: WrappingMode;
  wrapT: WrappingMode;
}

interface glTFMaterial {
  name?: string;
  alphaMode?: AlphaMode;
  alphaCutoff?: number;
  doubleSided?: boolean;
  pbrMetallicRoughness?: glTFMetallicRoughness;
  normalTexture?: glTFMaterialTex;
  emissiveFactor?: [number, number, number];
  emissiveTexture?: glTFMaterialTex;
}

interface glTFMetallicRoughness {
  baseColorFactor?: [number, number, number, number];
  baseColorTexture?: glTFMaterialTex;
  metallicFactor?: number;
  roughnessFactor?: number;
  metallicRoughnessTexture?: glTFMaterialTex;
}

interface glTFMaterialTex {
  index: number;
  texCoord?: number;
  scale?: number;
}
