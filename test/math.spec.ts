import "mocha";
import { expect } from "chai";

import { Vector3, Quaternion } from "../src/math";

describe("Vector3", () => {
  describe("toArray", () => {
    it("returns [x, y, z]", () => {
      const vec = new Vector3(1, 2, 3);

      expect(vec.toArray()).to.eql([1, 2, 3]);
    });
  });
});

describe("Quaternion", () => {
  describe("toArray", () => {
    it("returns [x, y, z, w]", () => {
      const q = new Quaternion(1, 2, 3, 4);

      expect(q.toArray()).to.eql([1, 2, 3, 4]);
    });
  });
});
