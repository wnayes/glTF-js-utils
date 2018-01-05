import { MeshMode } from "./types";
var Mesh = /** @class */ (function () {
    function Mesh() {
        this.material = [];
        this.mode = MeshMode.TRIANGLES;
        this._vertices = [];
        this._materialIndices = [];
    }
    Mesh.prototype.addFace = function (v1, v2, v3, materialIndex) {
        this._vertices.push(v1);
        this._vertices.push(v2);
        this._vertices.push(v3);
        this._materialIndices.push(materialIndex);
    };
    Mesh.prototype.forEachFace = function (fn) {
        for (var i = 0; i < this._vertices.length / 3; i++) {
            fn(this._vertices[(i * 3)], this._vertices[(i * 3) + 1], this._vertices[(i * 3) + 2], this._materialIndices[i]);
        }
    };
    return Mesh;
}());
export { Mesh };
