import { AlphaMode } from "./types";
var Material = /** @class */ (function () {
    function Material() {
        this.name = "";
        this.alphaCutoff = 0.5;
        this.alphaMode = AlphaMode.OPAQUE;
        this.doubleSided = false;
        this.pbrMetallicRoughness = {
            metallicFactor: 1.0,
            roughnessFactor: 1.0,
        };
    }
    return Material;
}());
export { Material };
