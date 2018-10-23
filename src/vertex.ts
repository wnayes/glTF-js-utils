import { RGBColor, RGBAColor } from "./types";

export class Vertex {
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;

  public u: number = 0;
  public v: number = 0;

  public normalX: number = 0;
  public normalY: number = 0;
  public normalZ: number = 0;

  public color?: RGBColor | RGBAColor;
}
