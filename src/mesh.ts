import { Material } from "./material";
import { Vertex } from "./vertex";
import { MeshMode, RGBColor, RGBAColor } from "./types";

export class Mesh {
  public material: Material[] = [];
  public mode: MeshMode = MeshMode.TRIANGLES;

  private _vertices: Vertex[] = [];
  private _faceColors: (RGBColor | RGBAColor)[] = [];
  private _materialIndices: number[] = [];

  public addFace(v1: Vertex, v2: Vertex, v3: Vertex, color: RGBColor | RGBAColor, materialIndex: number): void {
    this._vertices.push(v1);
    this._vertices.push(v2);
    this._vertices.push(v3);
    this._faceColors.push(color);
    this._materialIndices.push(materialIndex);
  }

  public forEachFace(fn: (v1: Vertex, v2: Vertex, v3: Vertex, color: RGBColor | RGBAColor, materialIndex: number) => void): void {
    for (let i = 0; i < this._vertices.length / 3; i++) {
      fn(
        this._vertices[(i * 3)],
        this._vertices[(i * 3) + 1],
        this._vertices[(i * 3) + 2],
        this._faceColors[i],
        this._materialIndices[i]
      );
    }
  }
}
