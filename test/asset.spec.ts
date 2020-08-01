import "mocha";
import { expect } from "chai";

import { GLTFAsset } from "../src/asset";
import { Scene } from "../src/scene";

function getScenes(asset: GLTFAsset): Scene[] {
  const scenes: Scene[] = [];
  asset.forEachScene(scene => scenes.push(scene));
  return scenes;
}

describe("GLTFAsset", () => {
  describe("setDefaultScene", () => {
    it("updates defaultScene if given a number", () => {
      const asset = new GLTFAsset();
      expect(asset.defaultScene).to.equal(0);

      asset.setDefaultScene(1);

      expect(asset.defaultScene).to.equal(1);
    });
  });

  describe("addScene", () => {
    it("adds a new scene to the scene collection", () => {
      const asset = new GLTFAsset();
      expect(getScenes(asset).length).to.equal(0);

      const scene = new Scene("Test scene");
      asset.addScene(scene);

      expect(getScenes(asset).length).to.equal(1);
      expect(getScenes(asset)).to.eql([scene]);
    });

    it("throws an error if a scene was previously added", () => {
      const asset = new GLTFAsset();

      const scene = new Scene("Test scene");
      asset.addScene(scene);

      expect(() => asset.addScene(scene)).to.throw("Scene passed to addScene was added prior.");
    });
  });

  describe("removeScene", () => {
    it("removes a scene", () => {
      const asset = new GLTFAsset();

      const scene = new Scene("Test scene");
      asset.addScene(scene);
      asset.removeScene(scene);

      expect(getScenes(asset).length).to.equal(0);
    });
  });
});
