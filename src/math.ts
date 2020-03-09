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
export class Matrix {

    public data: number[][];

    public constructor(rows: number = 4) {
        this.data = Matrix.Identity(rows);
    }

    /**
     * Return the matrix values
     */
    public get m(): number[][] {
        return this.data;
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
}