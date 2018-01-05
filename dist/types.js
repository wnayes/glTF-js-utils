var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
export var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["BYTE"] = 5120] = "BYTE";
    ComponentType[ComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    ComponentType[ComponentType["SHORT"] = 5122] = "SHORT";
    ComponentType[ComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    ComponentType[ComponentType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    ComponentType[ComponentType["FLOAT"] = 5126] = "FLOAT";
})(ComponentType || (ComponentType = {}));
export var DataType;
(function (DataType) {
    DataType[DataType["SCALAR"] = 0] = "SCALAR";
    DataType[DataType["VEC2"] = 1] = "VEC2";
    DataType[DataType["VEC3"] = 2] = "VEC3";
    DataType[DataType["VEC4"] = 3] = "VEC4";
    DataType[DataType["MAT2"] = 4] = "MAT2";
    DataType[DataType["MAT3"] = 5] = "MAT3";
    DataType[DataType["MAT4"] = 6] = "MAT4";
})(DataType || (DataType = {}));
export var MeshMode;
(function (MeshMode) {
    MeshMode[MeshMode["POINTS"] = 0] = "POINTS";
    MeshMode[MeshMode["LINES"] = 1] = "LINES";
    MeshMode[MeshMode["LINE_LOOP"] = 2] = "LINE_LOOP";
    MeshMode[MeshMode["LINE_STRIP"] = 3] = "LINE_STRIP";
    MeshMode[MeshMode["TRIANGLES"] = 4] = "TRIANGLES";
    MeshMode[MeshMode["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
    MeshMode[MeshMode["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(MeshMode || (MeshMode = {}));
export var WrappingMode;
(function (WrappingMode) {
    WrappingMode[WrappingMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    WrappingMode[WrappingMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    WrappingMode[WrappingMode["REPEAT"] = 10497] = "REPEAT";
})(WrappingMode || (WrappingMode = {}));
export var AlphaMode;
(function (AlphaMode) {
    AlphaMode["OPAQUE"] = "OPAQUE";
    AlphaMode["MASK"] = "MASK";
    AlphaMode["BLEND"] = "BLEND";
})(AlphaMode || (AlphaMode = {}));
var RGBColor = /** @class */ (function () {
    function RGBColor() {
    }
    return RGBColor;
}());
export { RGBColor };
var RGBAColor = /** @class */ (function (_super) {
    __extends(RGBAColor, _super);
    function RGBAColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RGBAColor;
}(RGBColor));
export { RGBAColor };
