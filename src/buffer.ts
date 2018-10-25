import { ComponentType, DataType } from "./types";
import { glTFBuffer, glTF, glTFBufferView } from "./gltftypes";

export class Buffer {
  private _gltf: glTF;
  private _gltfBuffer: glTFBuffer;
  private _index: number;
  private _bufferViews: BufferView[] = [];
  private _finalizePromise?: Promise<void>;
  private _finalized: boolean = false;

  public constructor(gltf: glTF) {
    this._gltf = gltf;

    if (!gltf.buffers)
      gltf.buffers = [];

    this._index = gltf.buffers.length;
    const gltfBuffer = {
      byteLength: -1,
    };
    gltf.buffers.push(gltfBuffer);
    this._gltfBuffer = gltfBuffer;
  }

  public getIndex(): number {
    return this._index;
  }

  public addBufferView(componentType: ComponentType, dataType: DataType): BufferView {
    if (this._finalizePromise)
      throw new Error("Cannot add buffer view after finalizing buffer");

    const view = new BufferView(this, this._gltf, componentType, dataType);
    this._bufferViews.push(view);
    return view;
  }

  public getByteOffset(bufferView: BufferView): number {
    let byteOffset = 0;
    for (const view of this._bufferViews) {
      if (view === bufferView) {
        return byteOffset;
      }
      byteOffset += view.getSize();
    }
    throw "Given bufferView was not present in this buffer";
  }

  public getViewFinalizePromises(targetBufferView?: BufferView): Promise<void>[] {
    const promises = [];
    for (const view of this._bufferViews) {
      if (targetBufferView && view === targetBufferView) {
        return promises;
      }
      promises.push(view.finalized);
    }
    return promises;
  }

  public getArrayBuffer(): ArrayBuffer {
    if (!this._finalized)
      throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");

    let byteLength = this._getTotalSize();
    const buffer = new ArrayBuffer(byteLength);

    let currentIndex = 0;
    for (const bufferView of this._bufferViews) {
      bufferView.write(buffer, currentIndex);
      currentIndex += bufferView.getSize();
    }

    return buffer;
  }

  public finalize(): Promise<void> {
    if (this._finalizePromise)
      throw new Error(`Buffer ${this._index} was already finalized`);

    this._finalizePromise = new Promise((resolve) => {
      resolve(Promise.all(this.getViewFinalizePromises()));
    }).then(() => {
      this._finalized = true;

      const arrayBuffer = this.getArrayBuffer();

      this._gltfBuffer.byteLength = arrayBuffer.byteLength;
      if (this._index !== 0 || !this._gltf.extras.binChunkBuffer)
        (this._gltfBuffer.uri as any) = arrayBuffer; // Still not totally finalized, see stringify
    });
    this._gltf.extras.promises.push(this._finalizePromise);
    return this._finalizePromise;
  }

  private _getTotalSize(): number {
    let byteLength = 0;
    for (const bufferView of this._bufferViews) {
      byteLength += bufferView.getSize();
    }
    return byteLength;
  }
}

export class BufferView {
  private _buffer: Buffer;
  private _componentType: ComponentType;
  private _dataType: DataType;
  private _data: number[] = [];
  private _accessorIndex: number = -1;
  private _gltfBufferView: glTFBufferView;
  private _index: number;
  private _asyncWritePromise?: Promise<void>;
  private _finalized: boolean = false;
  private _finalizedPromise?: Promise<void>;
  private _finalizedPromiseResolve?: any;

  public constructor(buffer: Buffer, gltf: glTF, componentType: ComponentType, dataType: DataType) {
    this._buffer = buffer;
    this._componentType = componentType;
    this._dataType = dataType;

    if (!gltf.bufferViews)
      gltf.bufferViews = [];

    this._index = gltf.bufferViews.length;
    this._gltfBufferView = {
      buffer: buffer.getIndex(),
      byteLength: -1,
    };
    gltf.bufferViews.push(this._gltfBufferView);
  }

  public getIndex(): number {
    return this._index;
  }

  public push(item: number): void {
    this._data.push(item);
  }

  public getDataSize(): number {
    return this._data.length * this._sizeOfComponentType();
  }

  public getSize(): number {
    // Technically there are some cases where the data could be more compact,
    // but to be safe, we just always align each view to 4 bytes.
    return makeDivisibleBy(this.getDataSize(), 4);
  }

  public getByteOffset(): number {
    if (!this._finalized)
      throw new Error("Cannot get BufferView offset until it is finalized");

    return this._buffer.getByteOffset(this);
  }

  public write(buffer: ArrayBuffer, startIndex: number = this.getSize()): void {
    const dataView = new DataView(buffer, startIndex);

    const sizeOfComponentType = this._sizeOfComponentType();
    for (let i = 0; i < this._data.length; i++) {
      const val = this._data[i];
      this._writeValue(dataView, i * sizeOfComponentType, val);
    }
  }

  public writeAsync(buffer: Promise<ArrayBuffer>, startIndex: number = this.getSize()): Promise<void> {
    if (this._asyncWritePromise)
      throw new Error("Can't write multiple buffer view values asynchronously");
    this._asyncWritePromise = buffer.then((arrayBuffer: ArrayBuffer) => {
      this.write(arrayBuffer, startIndex);
      delete this._asyncWritePromise;
    });
    return this._asyncWritePromise;
  }

  public startAccessor(): void {
    if (this._accessorIndex >= 0)
      throw "Accessor was started without ending the previous one";

    this._accessorIndex = this._data.length;
  }

  public endAccessor(): BufferAccessorInfo {
    if (this._accessorIndex < 0)
      throw "An accessor was not started, but was attempted to be ended";

    const elementSize = this._getElementSize();
    const numComponentsForDataType = this._numComponentsForDataType()
    const numElements = (this._data.length - this._accessorIndex) / numComponentsForDataType;
    if (numElements % 1)
      throw "An accessor was ended with missing component values";

    const info = {
      byteOffset: elementSize * (this._accessorIndex / numComponentsForDataType), // All previous data
      componentType: this._componentType,
      count: numElements,
      type: this._dataType,
    };

    this._accessorIndex = -1;

    return info;
  }

  public get finalized(): Promise<void> {
    if (!this._finalizedPromise) {
      if (this._finalized) {
        return this._finalizedPromise = Promise.resolve();
      }
      else {
        return this._finalizedPromise = new Promise<void>((resolve) => {
          this._finalizedPromiseResolve = resolve;
        });
      }
    }
    return this._finalizedPromise;
  }

  public finalize(): Promise<void> {
    const gltfBufferView = this._gltfBufferView;

    return new Promise((resolve) => {
      const prereqs = this._buffer.getViewFinalizePromises(this);
      if (this._asyncWritePromise)
        prereqs.push(this._asyncWritePromise);
      resolve(Promise.all(prereqs));
    }).then(() => {
      this._finalized = true;

      gltfBufferView.byteOffset = this.getByteOffset();
      gltfBufferView.byteLength = this.getDataSize();

      if (this._finalizedPromiseResolve)
        this._finalizedPromiseResolve();
    });
  }

  private _getElementSize(): number {
    return this._sizeOfComponentType() * this._numComponentsForDataType();
  }

  private _sizeOfComponentType(): number {
    switch (this._componentType) {
      case ComponentType.BYTE:
      case ComponentType.UNSIGNED_BYTE:
        return 1;

      case ComponentType.SHORT:
      case ComponentType.UNSIGNED_SHORT:
        return 2;

      case ComponentType.UNSIGNED_INT:
      case ComponentType.FLOAT:
        return 4;
    }

    throw `Unrecognized component type ${this._componentType}`;
  }

  private _numComponentsForDataType(): number {
    switch (this._dataType) {
      case DataType.SCALAR:
        return 1;

      case DataType.VEC2:
        return 2;

      case DataType.VEC3:
        return 3;

      case DataType.VEC4:
      case DataType.MAT2:
        return 4;

      case DataType.MAT3:
        return 9;

      case DataType.MAT4:
        return 16;
    }

    throw "Unsupported data type";
  }

  private _writeValue(dataView: DataView, index: number, val: number) {
    switch (this._componentType) {
      case ComponentType.BYTE:
        dataView.setInt8(index, val);
        break;

      case ComponentType.UNSIGNED_BYTE:
        dataView.setUint8(index, val);
        break;

      case ComponentType.SHORT:
        dataView.setInt16(index, val, true);
        break;

      case ComponentType.UNSIGNED_SHORT:
        dataView.setUint16(index, val, true);
        break;

      case ComponentType.UNSIGNED_INT:
        dataView.setUint32(index, val, true);
        break;

      case ComponentType.FLOAT:
        dataView.setFloat32(index, val, true);
        break;

      default:
        throw "Unsupported data type";
    }
  }
}

export interface BufferAccessorInfo {
  byteOffset: number;
  componentType: ComponentType;
  count: number;
  type: DataType;
}

function makeDivisibleBy(num: number, by: number) {
  return by * Math.ceil(num / by);
}
