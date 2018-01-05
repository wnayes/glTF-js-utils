import { XYZPair, Quaternion, toQuaternion, degreesToRadians } from "./math";
var Node = /** @class */ (function () {
    function Node() {
        this.name = "";
        this._nodes = [];
        this._translation = new XYZPair();
        this._rotation = new Quaternion();
        this._scale = new XYZPair();
    }
    Node.prototype.addNode = function (node) {
        if (this._nodes.indexOf(node) >= 0)
            throw new Error("Node passed to addNode was added prior.");
        this._nodes.push(node);
    };
    Node.prototype.forEachNode = function (fn) {
        this._nodes.forEach(fn);
    };
    Node.prototype.setTranslation = function (x, y, z) {
        this._translation = new XYZPair(x, y, z);
    };
    Node.prototype.getTranslation = function () {
        return this._translation;
    };
    Node.prototype.setRotationDegrees = function (x, y, z) {
        this.setRotationRadians(degreesToRadians(x), degreesToRadians(y), degreesToRadians(z));
    };
    Node.prototype.setRotationRadians = function (x, y, z) {
        this._rotation = toQuaternion(x, y, z);
    };
    Node.prototype.setRotationQuaternion = function (x, y, z, w) {
        this._rotation = new Quaternion(x, y, z, w);
    };
    Node.prototype.getRotationQuaternion = function () {
        return this._rotation;
    };
    Node.prototype.setScale = function (x, y, z) {
        this._scale = new XYZPair(x, y, z);
    };
    Node.prototype.getScale = function () {
        return this._scale;
    };
    return Node;
}());
export { Node };
