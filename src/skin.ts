import { Node } from "./node";

export class Skin {
  public name: string = "";
  public skeletonNode: Node | null;

  constructor(skeletonNode: Node | null = null, name: string = "") {
    this.skeletonNode = skeletonNode;
    this.name = name;
  }
}
