import "mocha";
import { expect } from "chai";
import { Texture } from "../src/texture";
import { dataUriToArrayBuffer } from "../src/imageutils";

const pngDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
const nonPngDataUri = "data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==";

describe("Texture", () => {
  describe("constructor", () => {
    it("allows PNG ArrayBuffer", () => {
      const buffer = dataUriToArrayBuffer(pngDataUri);
      expect(() => {
        new Texture(buffer);
      }).not.to.throw();
    });

    it("rejects non-PNG ArrayBuffer", () => {
      const buffer = dataUriToArrayBuffer(nonPngDataUri);
      expect(() => {
        new Texture(buffer);
      }).to.throw();
    });

    it("allows PNG Data URL", () => {
      expect(() => {
        new Texture(pngDataUri);
      }).not.to.throw();
    });

    it("rejects non-PNG Data URL", () => {
      expect(() => {
        new Texture(nonPngDataUri);
      }).to.throw();
    });
  });
});
