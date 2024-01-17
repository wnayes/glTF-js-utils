import { Texture } from "./texture";
import { AlphaMode, VertexColorMode } from "./types";

export class Material {
  public name = "";
  public alphaCutoff = 0.5;
  public alphaMode = AlphaMode.OPAQUE;
  public doubleSided = false;
  public vertexColorMode: VertexColorMode = VertexColorMode.NoColors;

  public pbrMetallicRoughness: PBRMetallicRoughness = {
    metallicFactor: 1.0,
    roughnessFactor: 1.0,
  };

  public normalTexture?: Texture;
  public occlusionTexture?: Texture;
  public emissiveTexture?: Texture;
}

export interface PBRMetallicRoughness {
  metallicFactor: number;
  roughnessFactor: number;
  baseColorFactor?: [number, number, number, number];
  baseColorTexture?: Texture;
  metallicRoughnessTexture?: Texture;
}
