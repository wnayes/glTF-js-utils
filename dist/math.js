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
var XYZPair = /** @class */ (function () {
    function XYZPair(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    XYZPair.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    return XYZPair;
}());
export { XYZPair };
var Quaternion = /** @class */ (function (_super) {
    __extends(Quaternion, _super);
    function Quaternion(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 1; }
        var _this = _super.call(this, x, y, z) || this;
        _this.w = 1;
        _this.w = w;
        return _this;
    }
    Quaternion.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    return Quaternion;
}(XYZPair));
export { Quaternion };
export function toQuaternion(x, y, z) {
    var cy = Math.cos(z * 0.5);
    var sy = Math.sin(z * 0.5);
    var cr = Math.cos(y * 0.5);
    var sr = Math.sin(y * 0.5);
    var cp = Math.cos(x * 0.5);
    var sp = Math.sin(x * 0.5);
    return new Quaternion(cy * sr * cp - sy * cr * sp, cy * cr * sp + sy * sr * cp, sy * cr * cp - cy * sr * sp, cy * cr * cp + sy * sr * sp);
}
export function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
