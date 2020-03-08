import { Node } from "./node";

export class Scene {
  public name: string = "";

  private _nodes: Node[] = [];

  public constructor(name: string = "")
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
}
