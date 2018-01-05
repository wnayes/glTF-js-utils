import { GLTFAsset } from "./asset";
import { Scene } from "./scene";
import { Node } from "./node";
import { Mesh } from "./mesh";
import { Material } from "./material";
import { Texture } from "./texture";
import { Vertex } from "./vertex";
import { AlphaMode, RGBColor, WrappingMode } from "./types";

export function glTFAssetFromTHREE(obj: THREE.Object3D): GLTFAsset {
  const asset = new GLTFAsset();

  const scene = new Scene();
  scene.name = obj.name;
  asset.addScene(scene);
  scene.addNode(NodeFromTHREE(obj));

  return asset;
}

function NodeFromTHREE(obj: THREE.Object3D): Node {
  const node = new Node();
  node.name = obj.name;

  if (isTHREEMesh(obj)) {
    node.mesh = MeshFromTHREE(obj);
  }
  else {
    node.setTranslation(obj.position.x, obj.position.y, obj.position.z);
    node.setRotationRadians(obj.rotation.x, obj.rotation.y, obj.rotation.z);
    node.setScale(obj.scale.x, obj.scale.y, obj.scale.z);

    for (const child of obj.children) {
      node.addNode(NodeFromTHREE(child));
    }
  }

  return node;
}

function MeshFromTHREE(obj: THREE.Mesh): Mesh {
  const mesh = new Mesh();

  const threeGeometry = obj.geometry;
  if (isTHREEGeometry(threeGeometry)) {
    for (let i = 0; i < threeGeometry.faces.length; i++) {
      const face = threeGeometry.faces[i];

      mesh.addFace(
        VertexFromTHREE(threeGeometry, i, face.a, 0),
        VertexFromTHREE(threeGeometry, i, face.b, 1),
        VertexFromTHREE(threeGeometry, i, face.c, 2),
        face.materialIndex
      );
    }

    mesh.material = MaterialsFromTHREE(obj.material);
  }
  else {
    throw new Error("BufferGeometry (or other type) not supported.");
  }

  return mesh;
}

function MaterialsFromTHREE(threeMaterial: THREE.Material | THREE.Material[]): Material[] {
  const materials: Material[] = [];

  if (!Array.isArray(threeMaterial)) {
    threeMaterial = [threeMaterial];
  }

  for (const mat of threeMaterial) {
    materials.push(MaterialFromTHREE(mat));
  }

  return materials;
}

function MaterialFromTHREE(threeMaterial: THREE.Material): Material {
  const material = new Material();

  material.doubleSided = threeMaterial.side === 2; // THREE.DoubleSide;

  if (isTHREEMeshBasicMaterial(threeMaterial)) {
    material.pbrMetallicRoughness.metallicFactor = 0;
    material.pbrMetallicRoughness.roughnessFactor = 0;

    if (threeMaterial.transparent) {
      material.alphaMode = AlphaMode.MASK;
      material.alphaCutoff = threeMaterial.alphaTest;
    }

    if (threeMaterial.map) {
      const texture = new Texture();
      texture.image = threeMaterial.map.image;
      texture.wrapS = WrappingModeFromTHREE(threeMaterial.map.wrapS);
      texture.wrapT = WrappingModeFromTHREE(threeMaterial.map.wrapT);
      material.pbrMetallicRoughness.baseColorTexture = texture;
    }
  }
  else {
    throw new Error(`${threeMaterial.type} is currently not supported.`);
  }

  return material;
}

function VertexFromTHREE(threeGeometry: THREE.Geometry, faceIndex: number, vertexIndex: number, vertexRelIndex: number): Vertex {
  const vertex = new Vertex();

  const threeVertex = threeGeometry.vertices[vertexIndex];

  vertex.x = threeVertex.x;
  vertex.y = threeVertex.y;
  vertex.z = threeVertex.z;

  if (threeGeometry.faceVertexUvs[0] && threeGeometry.faceVertexUvs[0][faceIndex]
    && threeGeometry.faceVertexUvs[0][faceIndex][vertexRelIndex])
  {
    vertex.u = threeGeometry.faceVertexUvs[0][faceIndex][vertexRelIndex].x;
    vertex.v = threeGeometry.faceVertexUvs[0][faceIndex][vertexRelIndex].y;
  }

  const threeFace = threeGeometry.faces[faceIndex];

  if (threeFace.vertexNormals[vertexRelIndex]) {
    vertex.normalX = threeFace.vertexNormals[vertexRelIndex].x;
    vertex.normalY = threeFace.vertexNormals[vertexRelIndex].y;
    vertex.normalZ = threeFace.vertexNormals[vertexRelIndex].z;
  }

  if (threeFace.vertexColors[vertexRelIndex]) {
    vertex.color = new RGBColor();
    vertex.color.r = threeFace.vertexColors[vertexRelIndex].r;
    vertex.color.g = threeFace.vertexColors[vertexRelIndex].g;
    vertex.color.b = threeFace.vertexColors[vertexRelIndex].b;
  }

  return vertex;
}

function WrappingModeFromTHREE(mode: THREE.Wrapping): WrappingMode {
  switch (mode) {
    case 1000: // THREE.RepeatWrapping
      return WrappingMode.REPEAT;

    case 1002: // THREE.MirroredRepeatWrapping
      return WrappingMode.MIRRORED_REPEAT;

    case 1001: // THREE.ClampToEdgeWrapping
    default:
      return WrappingMode.CLAMP_TO_EDGE;
  }
}

function isTHREEMesh(obj: THREE.Object3D): obj is THREE.Mesh {
  return obj.type === "Mesh";
}

function isTHREEGeometry(obj: any): obj is THREE.Geometry {
  return obj.type === "Geometry";
}

function isTHREEMeshBasicMaterial(obj: THREE.Material): obj is THREE.MeshBasicMaterial {
  return obj.type === "MeshBasicMaterial";
}
