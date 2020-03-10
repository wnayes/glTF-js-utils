export class Vector3 {
  public constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public x: number = 0;
  public y: number = 0;
  public z: number = 0;

  public toArray(): [number, number, number] {
    return [this.x, this.y, this.z];
  }
}

export class Quaternion {
  public constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  public x: number;
  public y: number;
  public z: number;
  public w: number;

  public toArray(): [number, number, number, number] {
    return [this.x, this.y, this.z, this.w];
  }
}

export function toQuaternion(x: number, y: number, z: number): Quaternion {
  const cy = Math.cos(z * 0.5);
  const sy = Math.sin(z * 0.5);
  const cr = Math.cos(x * 0.5);
  const sr = Math.sin(x * 0.5);
  const cp = Math.cos(y * 0.5);
  const sp = Math.sin(y * 0.5);

  return new Quaternion(
    cy * sr * cp - sy * cr * sp,
    cy * cr * sp + sy * sr * cp,
    sy * cr * cp - cy * sr * sp,
    cy * cr * cp + sy * sr * sp
  );
}

export function degreesToRadians(degrees: number) {
  return degrees * Math.PI / 180;
}

// NxN Square Matrix
// Make sure to store as row-major
export class Matrix {

  public data: number[][]; // try to use row-major

  public constructor(rows: number = 4) {
    this.data = Matrix.Identity(rows);
  }

  /**
   * Return the matrix values
   */
  public get m(): number[][] {
    return this.data;
  }

  public get rows(): number
  {
    return this.data.length;
  }

  public get cols(): number
  {
    if (this.rows === 0)
      return 0;
    return this.data[0].length;
  }

  /**
   * Initialize an identity square matrix
   */
  public static Identity(rows: number): number[][] {
    let M = [];
    for (let r = 0; r < rows; ++r)
    {
      let Mrow = [];
      for (let c = 0; c < rows; ++c)
      {
        Mrow.push(r===c?1:0);
      }
      M.push(Mrow);
    }
    return M;
  }

  public static IsIdentity(matrix: Matrix): boolean {
    const rows = matrix.rows;
    const cols = matrix.cols;
    if (rows !== cols)
      return false;
    for (let r = 0; r < rows; ++r)
    {
      for (let c = 0; c < cols; ++c)
      {
        if (matrix.data[r][c] != (r === c ? 1 : 0))
          return false;
      }
    }
    return true;
  }
}

export class Matrix3x3 extends Matrix {
  public constructor() {
    super(3);
  }

  public static Identity(): number[][] {
    return Matrix.Identity(3);
  }

  public static IsIdentity(matrix: Matrix): boolean {
    if (matrix.rows !== 3 || matrix.cols !== 3)
      return false;
    return Matrix.IsIdentity(matrix);
  }
}

export class Matrix4x4 extends Matrix {
  public constructor() {
    super(4);
  }

  public static Identity(): number[][] {
    return Matrix.Identity(4);
  }

  public static IsIdentity(matrix: Matrix): boolean {
    if (matrix.rows !== 4 || matrix.cols !== 4)
      return false;
    return Matrix.IsIdentity(matrix);
  }
}