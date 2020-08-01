import { Node } from "./node";

export class Scene {
  public name = "";

  private _nodes: Node[] = [];

  public constructor(name = "") {
    this.name = name;
  }

  public addNode(node: Node): void {
    if (this._nodes.indexOf(node) >= 0)
      return;
    // throw new Error("Node passed to addNode was added prior.");

    this._nodes.push(node);
  }

  public removeNode(node: Node | number): number {
    const idx = node instanceof Node ? this._nodes.indexOf(node) : node;
    if (idx >= 0 && idx < this._nodes.length)
      this._nodes.splice(idx, 1);
    return idx;
  }

  public forEachNode(fn: (node: Node) => void): void {
    this._nodes.forEach(fn);
  }
}
