import { arrayBufferIsPNG } from "./imageutils";
import { WrappingMode } from "./types";

/**
 * Supported texture image types.
 * For ArrayBuffer, the current assumption is that the buffer contains PNG data.
 * For string, expectation is an image/png data uri.
 */
export type TextureImageType = HTMLImageElement | HTMLCanvasElement | ArrayBuffer | string;

/** Represents a model texture. */
export class Texture {
  public wrapS: WrappingMode = WrappingMode.CLAMP_TO_EDGE;
  public wrapT: WrappingMode = WrappingMode.CLAMP_TO_EDGE;

  private __image!: TextureImageType;
  public set image(val: TextureImageType) {
    if (!val) {
      throw new Error("Why is the texture image being unset?");
    }
    if (val instanceof ArrayBuffer && !arrayBufferIsPNG(val)) {
      throw new Error("Texture was given an ArrayBuffer, but it does not appear to contain PNG image data.");
    }
    if (typeof val === "string" && !val.startsWith("data:image/png;base64,")) {
      throw new Error("Texture was given a string, but it does not appear be a data uri with base64 encoded image/png data.");
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
