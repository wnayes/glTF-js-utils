import { Scene } from "./scene";

export class GLTFAsset {
  public copyright = "";
  public defaultScene = 0;
  public generator = "glTF-js-utils";

  private _scenes: Scene[] = [];

  public setDefaultScene(scene: number | Scene): void {
    if (typeof scene === "number")
      this.defaultScene = scene;
    else {
      const sceneIndex = this._scenes.indexOf(scene);
      if (sceneIndex === -1)
        throw new Error("Scene passed to setDefaultScene was not found.");

      this.defaultScene = sceneIndex;
    }
  }

  public addScene(scene: Scene): void {
    if (this._scenes.indexOf(scene) >= 0)
      throw new Error("Scene passed to addScene was added prior.");

    this._scenes.push(scene);
  }

  public removeScene(scene: Scene): void {
    const sceneIndex = this._scenes.indexOf(scene);
    if (sceneIndex >= 0)
      this._scenes.splice(sceneIndex, 1);
  }

  public forEachScene(fn: (scene: Scene) => void): void {
    this._scenes.forEach(fn);
  }
}
