/**
 * Converts an image into a Data URI string.
 * @param image
 */
export function imageToDataURI(image: HTMLImageElement | HTMLCanvasElement): string {
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

  return canvas.toDataURL();
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
