var Scene = /** @class */ (function () {
    function Scene() {
        this.name = "";
        this._nodes = [];
    }
    Scene.prototype.addNode = function (node) {
        if (this._nodes.indexOf(node) >= 0)
            throw new Error("Node passed to addNode was added prior.");
        this._nodes.push(node);
    };
    Scene.prototype.forEachNode = function (fn) {
        this._nodes.forEach(fn);
    };
    return Scene;
}());
export { Scene };
