export class XYZPair {
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

export class Quaternion extends XYZPair {
  public constructor(x: number, y: number, z: number, w: number) {
    super(x, y, z);

    this.w = w;
  }

  public w: number = 1;

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
