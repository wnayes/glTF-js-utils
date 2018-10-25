export { GLTFAsset } from "./asset";
export { Scene } from "./scene";
export { Node } from "./node";
export { Mesh } from "./mesh";
export { Material } from "./material";
export { Texture } from "./texture";
export { Vertex } from "./vertex";
export { XYZPair, Quaternion } from "./math";
export { glTFAssetFromTHREE } from "./threejs";
export { AlphaMode, ComponentType, DataType, MeshMode, RGBColor, RGBAColor, VertexColorMode, WrappingMode } from "./types";
export { ImageOutputType, BufferOutputType } from "./types";

import { GLTFAsset } from "./asset";
import { addScenes } from "./gltf";
import { glTF } from "./gltftypes";
import { imageToDataURI, encodeBase64DataUri } from "./imageutils";
import { ImageOutputType, BufferOutputType } from "./types";

import * as jsz from "jszip";
import { createGLBBuffer } from "./glb";


export interface GLTFExportOptions {
  /** Controls how buffers are outputted. */
  bufferOutputType?: BufferOutputType;

  /** Controls how texture images are outputted. */
  imageOutputType?: ImageOutputType;

  /** Size of indentation to use when stringify-ing the glTF model (default: 4) */
  jsonSpacing?: number;
}

export type GLTFExportType = { [filename: string]: any };

const MODEL_NAME = "model.gltf";
const BIN_CHUNK_NAME = "BIN";

/**
 * Creates a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options
 * @returns An object, each key pointing to a file.
 */
export function exportGLTF(asset: GLTFAsset, options?: GLTFExportOptions): Promise<GLTFExportType> {
  options = options || {};

  const gltf: glTF = {
    asset: {
      version: "2.0",
      copyright: asset.copyright,
      generator: asset.generator,
    },
    extras: {
      options,
      binChunkBuffer: null,
      promises: [],
    }
  };

  addScenes(gltf, asset);

  const promises = gltf.extras.promises;
  delete gltf.extras;

  let currentData = 1;
  let currentImg = 1;

  return Promise.all(promises).then(() => {
    const output: { [filename: string]: any } = {};

    const jsonSpacing = typeof options!.jsonSpacing === "number" ? options!.jsonSpacing : 4;
    const gltfString = JSON.stringify(gltf, (key: string, value: any) => {
      if (key === "extras")
        return undefined;

      if (value instanceof ArrayBuffer) {
        switch (options!.bufferOutputType) {
          case BufferOutputType.DataURI:
            return encodeBase64DataUri(value);

          case BufferOutputType.GLB:
            if (output[BIN_CHUNK_NAME])
              throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
            output[BIN_CHUNK_NAME] = value;
            return undefined;

          default: // BufferOutputType.External
            const filename = `data${currentData}.bin`;
            currentData++;
            output[filename] = value;
            return filename;
        }
      }
      if (value instanceof HTMLImageElement || value instanceof HTMLCanvasElement) {
        const filename = `img${currentImg}.png`;
        currentImg++;
        output[filename] = imageToDataURI(value);
        // Strip off data uri schema
        output[filename] = output[filename].substr(output[filename].indexOf(",") + 1);
        return filename;
      }

      return value;
    }, jsonSpacing);

    output[MODEL_NAME] = gltfString;

    return output;
  });
}

/**
 * Creates a ZIP file of a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options
 * @returns A Promise to receive a ZIP blob is returned instead.
 */
export function exportGLTFZip(asset: GLTFAsset, jsZip: jsz, options?: GLTFExportOptions): Promise<Blob> {
  return exportGLTF(asset, options).then((output) => {
    const zip = new jsZip();
    for (let filename in output) {
      if (filename !== MODEL_NAME && typeof output[filename] === "string") { // An image
        zip.file(filename, output[filename], { base64: true });
      }
      else {
        zip.file(filename, output[filename]);
      }
    }
    return zip.generateAsync({ type: "blob" });
  });
}


/**
 * Creates a GLB binary format glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options
 * @returns An ArrayBuffer containing the GLB file.
 */
export function exportGLB(asset: GLTFAsset): Promise<ArrayBuffer> {
  return exportGLTF(asset, {
    bufferOutputType: BufferOutputType.GLB,
    imageOutputType: ImageOutputType.GLB
  }).then(output => {
    for (let filename in output) {
      if (filename === MODEL_NAME || filename === BIN_CHUNK_NAME)
        continue;
      throw new Error("External files along with GLB are not supported");
    }

    return createGLBBuffer(output[MODEL_NAME], output[BIN_CHUNK_NAME]);
  });
}
