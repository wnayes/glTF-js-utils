import { ComponentType, DataType } from "./types";
var Buffer = /** @class */ (function () {
    function Buffer() {
        this._bufferViews = [];
    }
    Buffer.prototype.addBufferView = function (componentType, dataType) {
        var view = new BufferView(this, componentType, dataType);
        this._bufferViews.push(view);
        return view;
    };
    Buffer.prototype.getByteOffset = function (bufferView) {
        var byteOffset = 0;
        for (var _i = 0, _a = this._bufferViews; _i < _a.length; _i++) {
            var view = _a[_i];
            if (view === bufferView) {
                return byteOffset;
            }
            byteOffset += view.getSize();
        }
        throw "Given bufferView was not present in this buffer";
    };
    Buffer.prototype.getArrayBuffer = function () {
        var byteLength = this._getTotalSize();
        var buffer = new ArrayBuffer(byteLength);
        var currentIndex = 0;
        for (var _i = 0, _a = this._bufferViews; _i < _a.length; _i++) {
            var bufferView = _a[_i];
            currentIndex += bufferView.write(buffer, currentIndex);
        }
        return buffer;
    };
    Buffer.prototype._getTotalSize = function () {
        var byteLength = 0;
        for (var _i = 0, _a = this._bufferViews; _i < _a.length; _i++) {
            var bufferView = _a[_i];
            byteLength += bufferView.getSize();
        }
        return byteLength;
    };
    return Buffer;
}());
export { Buffer };
var BufferView = /** @class */ (function () {
    function BufferView(buffer, componentType, dataType) {
        this._data = [];
        this._accessorIndex = -1;
        this._buffer = buffer;
        this._componentType = componentType;
        this._dataType = dataType;
    }
    BufferView.prototype.push = function (item) {
        this._data.push(item);
    };
    BufferView.prototype.getSize = function () {
        return this._data.length * this._sizeOfComponentType();
    };
    BufferView.prototype.getByteOffset = function () {
        return this._buffer.getByteOffset(this);
    };
    BufferView.prototype.write = function (buffer, startIndex) {
        var dataView = new DataView(buffer, startIndex);
        var sizeOfComponentType = this._sizeOfComponentType();
        for (var i = 0; i < this._data.length; i++) {
            var val = this._data[i];
            this._writeValue(dataView, i * sizeOfComponentType, val);
        }
        return startIndex + this.getSize();
    };
    BufferView.prototype.startAccessor = function () {
        if (this._accessorIndex >= 0)
            throw "Accessor was started without ending the previous one";
        this._accessorIndex = this._data.length;
    };
    BufferView.prototype.endAccessor = function () {
        if (this._accessorIndex < 0)
            throw "An accessor was not started, but was attempted to be ended";
        var elementSize = this._getElementSize();
        var numElements = (this._data.length - this._accessorIndex) / this._numComponentsForDataType();
        if (numElements % 1)
            throw "An accessor was ended with missing component values";
        var info = {
            byteOffset: elementSize * this._accessorIndex,
            componentType: this._componentType,
            count: numElements,
            type: this._dataType,
        };
        this._accessorIndex = -1;
        return info;
    };
    BufferView.prototype._getElementSize = function () {
        return this._sizeOfComponentType() * this._numComponentsForDataType();
    };
    BufferView.prototype._sizeOfComponentType = function () {
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
        throw "Unrecognized component type " + this._componentType;
    };
    BufferView.prototype._numComponentsForDataType = function () {
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
    };
    BufferView.prototype._writeValue = function (dataView, index, val) {
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
        }
        throw "Unsupported data type";
    };
    return BufferView;
}());
export { BufferView };
