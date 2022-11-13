import { RGBColor, RGBAColor } from "./types";

/** Represents a mesh vertex. */
export class Vertex {
  public x = 0;
  public y = 0;
  public z = 0;

  public u = 0;
  public v = 0;

  public normalX?: number;
  public normalY?: number;
  public normalZ?: number;

  public color?: RGBColor | RGBAColor;
}
