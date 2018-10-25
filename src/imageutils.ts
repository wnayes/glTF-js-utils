import { rejects } from "assert";

type ImageType = HTMLImageElement | HTMLCanvasElement;

/**
 * Converts an image into a Data URI string.
 * @param image
 */
export function imageToDataURI(image: ImageType): string {
  const canvas = _imageTypeToCanvas(image);
  return canvas.toDataURL();
}

/**
 * Converts an image into an ArrayBuffer.
 * @param image
 */
export function imageToArrayBuffer(image: ImageType): Promise<ArrayBuffer> {
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

function _imageTypeToCanvas(image: ImageType): HTMLCanvasElement {
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
 * Converts an ArrayBuffer into a base64 Data URI string.
 * @param buf
 */
export function encodeBase64DataUri(buf: ArrayBuffer): string {
  const codes: string[] = [];
  const uint8arr = new Uint8Array(buf);
  for (let i = 0; i < uint8arr.length; i++) {
    codes.push(String.fromCharCode(uint8arr[i]));
  }
  const b64 = btoa(codes.join(""));
  const uri = "data:application/octet-stream;base64," + b64;
  return uri;
}
