import { AlphaMode, ComponentType, DataType, MeshMode, WrappingMode } from "./types";

export interface glTF {
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

export interface glTFBuffer {
  name?: string;
  byteLength: number;
  uri?: string;
  extras?: any;
}

export interface glTFBufferView {
  name?: string;
  buffer: number;
  byteLength: number;
  byteOffset?: number;
  byteStride?: number;
  target?: number;
  extras?: any;
}

export interface glTFNode {
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

export interface glTFScene {
  name?: string;
  nodes?: number[];
}

export interface glTFAccessor {
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

export interface glTFMesh {
  name?: string;
  primitives: glTFMeshPrimitives[];
  weights?: number[];
}

export interface glTFMeshPrimitives {
  attributes: glTFMeshPrimitiveAttributes;
  indices?: number;
  material?: number;
  mode?: MeshMode;
  targets?: any[];
}

export interface glTFMeshPrimitiveAttributes {
  [type: string]: number; // type: glTFAttribute
}

export type glTFAttribute =
  "POSITION"
  | "NORMAL"
  | "TANGENT"
  | "TEXCOORD_0"
  | "TEXCOORD_1"
  | "COLOR_0";

export interface glTFTexture {
  name?: string;
  sampler?: number;
  source?: number;
}

export interface glTFImage {
  name?: string;
  uri?: string;
  mimeType?: string;
  bufferView?: number;
}

export interface glTFSampler {
  name?: string;
  magFilter?: number;
  minFilter?: number;
  wrapS: WrappingMode;
  wrapT: WrappingMode;
}

export interface glTFMaterial {
  name?: string;
  alphaMode?: AlphaMode;
  alphaCutoff?: number;
  doubleSided?: boolean;
  pbrMetallicRoughness?: glTFMetallicRoughness;
  normalTexture?: glTFMaterialTex;
  emissiveFactor?: [number, number, number];
  emissiveTexture?: glTFMaterialTex;
}

export interface glTFMetallicRoughness {
  baseColorFactor?: [number, number, number, number];
  baseColorTexture?: glTFMaterialTex;
  metallicFactor?: number;
  roughnessFactor?: number;
  metallicRoughnessTexture?: glTFMaterialTex;
}

export interface glTFMaterialTex {
  index: number;
  texCoord?: number;
  scale?: number;
}
