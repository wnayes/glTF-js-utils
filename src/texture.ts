import { WrappingMode } from "./types";

type TextureImageType = HTMLImageElement | HTMLCanvasElement;

export class Texture {
  public wrapS: WrappingMode = WrappingMode.CLAMP_TO_EDGE;
  public wrapT: WrappingMode = WrappingMode.CLAMP_TO_EDGE;
  private __image!: TextureImageType;
  public set image(val: TextureImageType) {
    if (!val) {
      throw new Error("Why is the texture image being unset?");
    }
    this.__image = val;
  }
  public get image(): TextureImageType {
    return this.__image;
  }

  public constructor(image: TextureImageType) {
    this.image = image;
  }
}
