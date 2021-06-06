import { TextureImageType } from "./texture";

/**
 * Converts an image into a Data URI string.
 * @param image
 */
export function imageToDataURI(image: TextureImageType): string {
  if (typeof image === "string") {
    return image;
  }
  if (image instanceof ArrayBuffer) {
    return encodeBase64DataUri(image, "image/png");
  }

  const canvas = _imageTypeToCanvas(image);
  return canvas.toDataURL();
}

/**
 * Converts an image into an ArrayBuffer.
 * @param image
 */
export function imageToArrayBuffer(image: TextureImageType): Promise<ArrayBuffer> {
  if (typeof image === "string") {
    return Promise.resolve(dataUriToArrayBuffer(image));
  }
  if (image instanceof ArrayBuffer) {
    return Promise.resolve(image);
  }

  const canvas = _imageTypeToCanvas(image);

  let promiseResolve: any, promiseReject: any;
  const promise = new Promise<ArrayBuffer>((resolve, reject) => {
    promiseResolve = resolve;
    promiseReject = reject;
  })
  canvas.toBlob((blob: Blob | null) => {
    if (!blob) {
      promiseReject("Unable to convert image to PNG");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      promiseResolve(reader.result as ArrayBuffer);
    });
    reader.readAsArrayBuffer(blob);
  }, "image/png");
  return promise;
}

function _imageTypeToCanvas(image: HTMLImageElement | HTMLCanvasElement): HTMLCanvasElement {
  let canvas;
  if (image instanceof HTMLImageElement) {
    canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d")!;
    context.drawImage(image, 0, 0, image.width, image.height);
  }
  else {
    canvas = image;
  }
  return canvas;
}

/**
 * Converts a DataURI to an ArrayBuffer.
 * @param dataUri DataURI. `data:mimeType;base64,...`
 */
export function dataUriToArrayBuffer(dataUri: string): ArrayBuffer {
  const binary = atob(dataUri.split(",")[1]);
  const buffer = new ArrayBuffer(binary.length);
  const byteArray = new Uint8Array(buffer);
  for (let i = 0; i < binary.length; i++) {
    byteArray[i] = binary.charCodeAt(i);
  }
  return buffer;
}

/**
 * Converts an ArrayBuffer into a base64 Data URI string.
 * @param buf Array buffer
 * @param mimeType Mime type of the data. Default is application/octet-stream.
 */
export function encodeBase64DataUri(buf: ArrayBuffer, mimeType?: string): string {
  const codes: string[] = [];
  const uint8arr = new Uint8Array(buf);
  for (let i = 0; i < uint8arr.length; i++) {
    codes.push(String.fromCharCode(uint8arr[i]));
  }
  const mime = mimeType || "application/octet-stream";
  const b64 = btoa(codes.join(""));
  const uri = `data:${mime};base64,${b64}`;
  return uri;
}

/** Determines if an ArrayBuffer holds a PNG format image. */
export function arrayBufferIsPNG(buffer: ArrayBuffer): boolean {
  // PNG starts with 89 50 4E 47 0D 0A 1A 0A
  if (buffer.byteLength < 8)
    return false;

  const arr = new Uint8Array(buffer);
  return arr[0] === 0x89
    && arr[1] ===  0x50
    && arr[2] === 0x4E
    && arr[3] === 0x47
    && arr[4] === 0x0D
    && arr[5] === 0x0A
    && arr[6] === 0x1A
    && arr[7] === 0x0A;
}
