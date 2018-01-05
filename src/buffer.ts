import { ComponentType, DataType } from "./types";

export class Buffer {
  private _bufferViews: BufferView[] = [];

  public addBufferView(componentType: ComponentType, dataType: DataType): BufferView {
    const view = new BufferView(this, componentType, dataType);
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

  public getArrayBuffer(): ArrayBuffer {
    let byteLength = this._getTotalSize();
    const buffer = new ArrayBuffer(byteLength);

    let currentIndex = 0;
    for (const bufferView of this._bufferViews) {
      bufferView.write(buffer, currentIndex);
      currentIndex += bufferView.getSize();
    }

    return buffer;
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

  public constructor(buffer: Buffer, componentType: ComponentType, dataType: DataType) {
    this._buffer = buffer;
    this._componentType = componentType;
    this._dataType = dataType;
  }

  public push(item: number): void {
    this._data.push(item);
  }

  public getSize(): number {
    return this._data.length * this._sizeOfComponentType();
  }

  public getByteOffset(): number {
    return this._buffer.getByteOffset(this);
  }

  public write(buffer: ArrayBuffer, startIndex: number): void {
    const dataView = new DataView(buffer, startIndex);

    const sizeOfComponentType = this._sizeOfComponentType();
    for (let i = 0; i < this._data.length; i++) {
      const val = this._data[i];
      this._writeValue(dataView, i * sizeOfComponentType, val);
    }
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
