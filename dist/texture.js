import { WrappingMode } from "./types";
var Texture = /** @class */ (function () {
    function Texture() {
        this.wrapS = WrappingMode.CLAMP_TO_EDGE;
        this.wrapT = WrappingMode.CLAMP_TO_EDGE;
    }
    return Texture;
}());
export { Texture };
