var GLTFAsset = /** @class */ (function () {
    function GLTFAsset() {
        this.copyright = "";
        this.defaultScene = 0;
        this.generator = "glTF-js-utils";
        this._scenes = [];
    }
    GLTFAsset.prototype.setDefaultScene = function (scene) {
        if (typeof scene === "number")
            this.defaultScene = scene;
        else {
            var sceneIndex = this._scenes.indexOf(scene);
            if (sceneIndex === -1)
                throw new Error("Scene passed to setDefaultScene was not found.");
            this.defaultScene = sceneIndex;
        }
    };
    GLTFAsset.prototype.addScene = function (scene) {
        if (this._scenes.indexOf(scene) >= 0)
            throw new Error("Scene passed to addScene was added prior.");
        this._scenes.push(scene);
    };
    GLTFAsset.prototype.removeScene = function (scene) {
        var sceneIndex = this._scenes.indexOf(scene);
        if (sceneIndex >= 0)
            this._scenes.splice(sceneIndex, 1);
    };
    GLTFAsset.prototype.forEachScene = function (fn) {
        this._scenes.forEach(fn);
    };
    return GLTFAsset;
}());
export { GLTFAsset };
