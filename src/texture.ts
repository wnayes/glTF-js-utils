import { WrappingMode } from "./types";

export class Texture {
  public image: HTMLImageElement | HTMLCanvasElement;
  public wrapS: WrappingMode = WrappingMode.CLAMP_TO_EDGE;
  public wrapT: WrappingMode = WrappingMode.CLAMP_TO_EDGE;
}
