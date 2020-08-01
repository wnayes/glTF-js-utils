export enum BufferOutputType {
  /** Create separate files for binary buffers (default) */
  External,

  /** Embed buffers as data URIs. */
  DataURI,

  /**
   * Embed buffers as chunks in a GLB buffer.
   */
  GLB,
}

export enum ImageOutputType {
  /** Create separate files for images (default) */
  External,

  /** Embed images as data URIs. */
  DataURI,

  /**
   * Embed images as chunks in a GLB buffer.
   */
  GLB,
}

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
  /** Red, between 0 and 1. */
  public r = 1;

  /** Green, between 0 and 1 */
  public g = 1;

  /** Blue, between 0 and 1 */
  public b = 1;
}

export class RGBAColor extends RGBColor {
  /** Alpha, between 0 and 1 */
  public a = 1;
}

// Matches THREE Colors
export enum VertexColorMode {
  NoColors = 0,
  FaceColors = 1,
  VertexColors = 2,
}

export enum InterpolationMode {
  LINEAR = "LINEAR",
  STEP = "STEP",
  CUBICSPLINE = "CUBICSPLINE"
}

export enum Transformation {
  TRANSLATION = "translation",
  ROTATION = "rotation",
  SCALE = "scale"
}