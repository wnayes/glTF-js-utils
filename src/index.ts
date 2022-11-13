export { GLTFAsset } from "./asset";
export { Scene } from "./scene";
export { Node } from "./node";
export { Mesh } from "./mesh";
export { Material } from "./material";
export { Texture } from "./texture";
export { Vertex } from "./vertex";
export { Skin } from "./skin";
export { Animation } from "./animation";
export { Vector3, Quaternion, Matrix, Matrix3x3, Matrix4x4 } from "./math";
export {
  AlphaMode,
  ComponentType,
  DataType,
  MeshMode,
  RGBColor,
  RGBAColor,
  VertexColorMode,
  WrappingMode,
  InterpolationMode,
  Transformation,
} from "./types";
export { ImageOutputType, BufferOutputType } from "./types";
export { Buffer, BufferView } from "./buffer";
export type { BufferAccessorInfo } from "./buffer";

import { GLTFAsset } from "./asset";
import { addScenes, createEmptyGLTF } from "./gltf";
import { encodeBase64DataUri, arrayBufferIsPNG } from "./imageutils";
import { ImageOutputType, BufferOutputType } from "./types";

import * as jsz from "jszip";
import { createGLBBuffer } from "./glb";

/** Options for glTF export APIs. */
export interface GLTFExportOptions {
  /** Controls how buffers are outputted. */
  bufferOutputType?: BufferOutputType;

  /** Controls how texture images are outputted. */
  imageOutputType?: ImageOutputType;

  /** Size of indentation to use when stringify-ing the glTF model (default: 4) */
  jsonSpacing?: number;
}

const MODEL_NAME_GLTF = "model.gltf";
const MODEL_NAME_GLB = "model.glb";

/** Return type of a glTF export function. */
export type GLTFExportType = {
  [filename: string]: ArrayBuffer | string;
};

export type GLTFExportTypeWithGLTF = {
  [filename: string]: ArrayBuffer | string;
  [MODEL_NAME_GLTF]: string;
};
export type GLTFExportTypeWithGLB = {
  [filename: string]: ArrayBuffer | string;
  [MODEL_NAME_GLB]: ArrayBuffer;
};

/**
 * Creates a GLB glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options Export options
 * @returns Promise for an object, each key pointing to a file.
 */
export async function exportGLTF(
  asset: GLTFAsset,
  options:
    | { imageOutputType: ImageOutputType.GLB }
    | { bufferOutputType: BufferOutputType.GLB }
): Promise<GLTFExportTypeWithGLB>;
/**
 * Creates a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options Export options
 * @returns Promise for an object, each key pointing to a file.
 */
export async function exportGLTF(
  asset: GLTFAsset,
  options?: GLTFExportOptions
): Promise<GLTFExportTypeWithGLTF>;

/**
 * Creates a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options Export options
 * @returns Promise for an object, each key pointing to a file.
 */
export async function exportGLTF(
  asset: GLTFAsset,
  options?: GLTFExportOptions
): Promise<GLTFExportType> {
  options = options || {};

  const gltf = createEmptyGLTF();
  gltf.asset.copyright = asset.copyright;
  gltf.asset.generator = asset.generator;
  gltf.extras.options = options;

  addScenes(gltf, asset);

  let currentData = 1;
  let currentImg = 1;

  let binChunkBuffer: ArrayBuffer | null = null;

  await Promise.all(gltf.extras.promises);

  delete (gltf as any).extras;

  const output: GLTFExportType = {};

  const jsonSpacing =
    typeof options!.jsonSpacing === "number" ? options!.jsonSpacing : 4;
  const gltfString = JSON.stringify(
    gltf,
    (key: string, value: any) => {
      if (key === "extras") return undefined;

      if (value instanceof ArrayBuffer) {
        let filename: string;
        if (arrayBufferIsPNG(value)) {
          switch (options!.imageOutputType) {
            case ImageOutputType.DataURI:
            case ImageOutputType.GLB:
              break; // Not applicable

            default: // ImageOutputType.External
              filename = `img${currentImg}.png`;
              currentImg++;
              output[filename] = value;
              return filename;
          }
        }

        switch (options!.bufferOutputType) {
          case BufferOutputType.DataURI:
            return encodeBase64DataUri(value);

          case BufferOutputType.GLB:
            if (binChunkBuffer)
              throw new Error(
                "Already encountered an ArrayBuffer, there should only be one in the GLB format."
              );
            binChunkBuffer = value;
            return undefined;

          default: // BufferOutputType.External
            filename = `data${currentData}.bin`;
            currentData++;
            output[filename] = value;
            return filename;
        }
      }

      return value;
    },
    jsonSpacing
  );

  const doingGLB =
    options!.bufferOutputType === BufferOutputType.GLB ||
    options!.imageOutputType === ImageOutputType.GLB;
  if (doingGLB) {
    output[MODEL_NAME_GLB] = createGLBBuffer(gltfString, binChunkBuffer);
  } else {
    output[MODEL_NAME_GLTF] = gltfString;
  }

  return output;
}

/**
 * Creates a ZIP file of a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param jsZip JSZip instance
 * @param options Export options
 * @returns A Promise to receive a ZIP blob is returned instead.
 */
export async function exportGLTFZip(
  asset: GLTFAsset,
  jsZip: jsz,
  options?: GLTFExportOptions
): Promise<Blob> {
  return exportGLTF(asset, options).then((output) => {
    const zip = new jsZip();
    for (const filename in output) {
      zip.file(filename, output[filename]);
    }
    return zip.generateAsync({ type: "blob" });
  });
}

/**
 * Creates a GLB binary format glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @returns An ArrayBuffer containing the GLB file.
 */
export async function exportGLB(asset: GLTFAsset): Promise<ArrayBuffer> {
  return exportGLTF(asset, {
    bufferOutputType: BufferOutputType.GLB,
    imageOutputType: ImageOutputType.GLB,
    jsonSpacing: 0,
  }).then((output) => {
    return output[MODEL_NAME_GLB] as ArrayBuffer;
  });
}
