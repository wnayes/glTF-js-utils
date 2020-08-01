const GLB_HEADER_SIZE = 12;
const GLB_CHUNK_HEADER_SIZE = 8;

const GLB_MAGIC = 0x46546C67;
const GLTF_VERSION = 2;

enum GLBChunkType {
  JSON = 0x4E4F534A,
  BIN = 0x004E4942,
}

export function createGLBBuffer(json: string, bin?: ArrayBuffer | null): ArrayBuffer {
  if (!json)
    throw new Error("GLB requires a JSON glTF chunk");

  let glbLength = GLB_HEADER_SIZE;
  glbLength += GLB_CHUNK_HEADER_SIZE;
  const encodedJSON = textToArrayBuffer(json);
  const jsonChunkSize = makeDivisibleBy(encodedJSON.byteLength, 4);
  glbLength += jsonChunkSize;

  if (bin) {
    glbLength += GLB_CHUNK_HEADER_SIZE;
    glbLength += bin.byteLength; // Already rounded

    if (bin.byteLength % 4)
      throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
  }

  const glbBuffer = new ArrayBuffer(glbLength);
  const glbDataView = new DataView(glbBuffer);
  writeHeader(glbDataView, glbLength);

  // Chunk 0 (JSON)
  const offset = writeChunk(glbDataView, encodedJSON, 12, GLBChunkType.JSON, 0x20);

  // Chunk 1 (Binary Buffer)
  if (bin) {
    writeChunk(glbDataView, bin, offset, GLBChunkType.BIN);
  }

  return glbBuffer;
}

function writeHeader(out: DataView, glbLength: number): void {
  out.setUint32(0, GLB_MAGIC, true);
  out.setUint32(4, GLTF_VERSION, true);
  out.setUint32(8, glbLength, true);
}

function writeChunk(out: DataView, chunk: ArrayBuffer, offset: number, chunkType: GLBChunkType, pad = 0): number {
  const chunkLength = makeDivisibleBy(chunk.byteLength, 4);
  out.setUint32(offset, chunkLength, true);
  out.setUint32(offset += 4, chunkType, true);
  writeArrayBuffer(out.buffer, chunk, offset += 4, 0, chunk.byteLength);
  offset += chunk.byteLength;

  while (offset % 4) {
    if (pad) {
      out.setUint8(offset, pad);
    }
    offset++;
  }

  return offset;
}

function textToArrayBuffer(json: string): ArrayBuffer {
  return (new TextEncoder()).encode(json).buffer;
}

function writeArrayBuffer(target: ArrayBuffer, src: ArrayBuffer, targetOffset: number, srcOffset: number, byteLength: number) {
  new Uint8Array(target, targetOffset, byteLength).set(new Uint8Array(src, srcOffset, byteLength), 0);
}

function makeDivisibleBy(num: number, by: number) {
  return by * Math.ceil(num / by);
}
