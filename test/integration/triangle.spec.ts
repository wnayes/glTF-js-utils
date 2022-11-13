import { expect } from "chai";
import {
  GLTFAsset,
  Scene,
  Node,
  Material,
  Mesh,
  Vertex,
  RGBColor,
  exportGLB,
} from "../../src/index";

/// <reference path="gltf-validator.d.ts" />
const { validateBytes } =
  require("gltf-validator") as typeof import("./gltf-validator"); // eslint-disable-line

describe("Triangle", () => {
  function createTriangleModel(): GLTFAsset {
    const asset = new GLTFAsset();
    const scene = new Scene();
    asset.addScene(scene);

    const node = new Node();
    node.setTranslation(0, 0, 0);
    node.setRotationRadians(0, 0, 0);
    node.setScale(1, 1, 1);
    scene.addNode(node);

    const mesh = new Mesh();
    mesh.material = [new Material()];
    node.mesh = mesh;

    const v1 = new Vertex();
    v1.x = 0;
    v1.y = 0;
    v1.z = 0;
    v1.u = 0;
    v1.v = 0;

    const v2 = new Vertex();
    v2.x = 5;
    v2.y = 5;
    v2.z = 5;
    v2.u = 0;
    v2.v = 0;

    const v3 = new Vertex();
    v3.x = 5;
    v3.y = 0;
    v3.z = 0;
    v3.u = 0;
    v3.v = 0;

    const faceColor = new RGBColor();
    faceColor.r = 1.0;
    faceColor.g = 1.0;
    faceColor.b = 1.0;
    const faceMaterialIndex = 0;

    mesh.addFace(v1, v2, v3, faceColor, faceMaterialIndex);

    return asset;
  }

  it("validates with no issues", async () => {
    const asset = createTriangleModel();
    const glb = await exportGLB(asset);

    const results = await validateBytes(new Uint8Array(glb));

    expect(results.issues.numErrors).to.equal(0);
    expect(results.issues.numWarnings).to.equal(0);
    // expect(results.issues.numHints).to.equal(0);
    // expect(results.issues.numInfos).to.equal(0);
  });
});
