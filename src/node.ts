import { XYZPair, Quaternion, toQuaternion, degreesToRadians } from "./math";
import { Mesh } from "./mesh";
import {Animation} from "./animation";


export class Node {
  public name: string = "";
  public mesh?: Mesh;
  public animations: Animation[] = [];

  private _nodes: Node[] = [];
  private _translation?: XYZPair;
  private _rotation?: Quaternion;
  private _scale?: XYZPair;

  constructor(name: string = "")
  {
    this.name = name;
  }

  public addNode(node: Node): void {
    if (this._nodes.indexOf(node) >= 0)
      throw new Error("Node passed to addNode was added prior.");

    this._nodes.push(node);
  }

  public forEachNode(fn: (node: Node) => void): void {
    this._nodes.forEach(fn);
  }

  public setTranslation(x: number, y: number, z: number): void {
    this._translation = new XYZPair(x, y, z);
  }

  public getTranslation(): XYZPair {
    return this._translation || new XYZPair(0, 0, 0);
  }

  public setRotationDegrees(x: number, y: number, z: number): void {
    this.setRotationRadians(degreesToRadians(x), degreesToRadians(y), degreesToRadians(z));
  }

  public setRotationRadians(x: number, y: number, z: number): void {
    this._rotation = toQuaternion(x, y ,z);
  }

  public setRotationQuaternion(x: number, y: number, z: number, w: number): void {
    this._rotation = new Quaternion(x, y, z, w);
  }

  public getRotationQuaternion(): Quaternion {
    return this._rotation || new Quaternion(0, 0, 0, 1);
  }

  public setScale(x: number, y: number, z: number): void {
    this._scale = new XYZPair(x, y, z);
  }

  public getScale(): XYZPair {
    return this._scale || new XYZPair(1, 1, 1);
  }
}
