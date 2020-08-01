import { RGBColor, RGBAColor } from "./types";

export class Vertex {
  public x = 0;
  public y = 0;
  public z = 0;

  public u = 0;
  public v = 0;

  public normalX = 0;
  public normalY = 0;
  public normalZ = 0;

  public color?: RGBColor | RGBAColor;
}
