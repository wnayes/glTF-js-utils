export enum ComponentType {
  BYTE = 5120,
  UNSIGNED_BYTE = 5121,
  SHORT = 5122,
  UNSIGNED_SHORT = 5123,
  UNSIGNED_INT = 5125,
  FLOAT = 5126,
}

export enum DataType {
  SCALAR = "SCALAR",
  VEC2 = "VEC2",
  VEC3 = "VEC3",
  VEC4 = "VEC4",
  MAT2 = "MAT2",
  MAT3 = "MAT3",
  MAT4 = "MAT4",
}

export enum MeshMode {
  POINTS = 0,
  LINES = 1,
  LINE_LOOP = 2,
  LINE_STRIP = 3,
  TRIANGLES = 4,
  TRIANGLE_STRIP = 5,
  TRIANGLE_FAN = 6,
}

export enum WrappingMode {
  CLAMP_TO_EDGE = 33071,
  MIRRORED_REPEAT = 33648,
  REPEAT = 10497,
}

export enum AlphaMode {
  OPAQUE = "OPAQUE",
  MASK = "MASK",
  BLEND = "BLEND",
}

export class RGBColor {
  public r: number;
  public g: number;
  public b: number;
}

export class RGBAColor extends RGBColor {
  public a: number;
}
