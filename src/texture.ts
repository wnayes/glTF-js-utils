import { WrappingMode } from "./types";

type TextureImageType = HTMLImageElement | HTMLCanvasElement;

export class Texture {
  public image: TextureImageType;
  public wrapS: WrappingMode = WrappingMode.CLAMP_TO_EDGE;
  public wrapT: WrappingMode = WrappingMode.CLAMP_TO_EDGE;

  public constructor(image: TextureImageType) {
    this.image = image;
  }
}
