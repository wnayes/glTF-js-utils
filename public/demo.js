/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlphaMode: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.AlphaMode),
/* harmony export */   Animation: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_8__.Animation),
/* harmony export */   Buffer: () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_11__.Buffer),
/* harmony export */   BufferOutputType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.BufferOutputType),
/* harmony export */   BufferView: () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_11__.BufferView),
/* harmony export */   ComponentType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.ComponentType),
/* harmony export */   DataType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.DataType),
/* harmony export */   GLTFAsset: () => (/* reexport safe */ _asset__WEBPACK_IMPORTED_MODULE_0__.GLTFAsset),
/* harmony export */   ImageOutputType: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.ImageOutputType),
/* harmony export */   InterpolationMode: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.InterpolationMode),
/* harmony export */   Material: () => (/* reexport safe */ _material__WEBPACK_IMPORTED_MODULE_4__.Material),
/* harmony export */   Matrix: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_9__.Matrix),
/* harmony export */   Matrix3x3: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_9__.Matrix3x3),
/* harmony export */   Matrix4x4: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_9__.Matrix4x4),
/* harmony export */   Mesh: () => (/* reexport safe */ _mesh__WEBPACK_IMPORTED_MODULE_3__.Mesh),
/* harmony export */   MeshMode: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.MeshMode),
/* harmony export */   Node: () => (/* reexport safe */ _node__WEBPACK_IMPORTED_MODULE_2__.Node),
/* harmony export */   Quaternion: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_9__.Quaternion),
/* harmony export */   RGBAColor: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.RGBAColor),
/* harmony export */   RGBColor: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.RGBColor),
/* harmony export */   Scene: () => (/* reexport safe */ _scene__WEBPACK_IMPORTED_MODULE_1__.Scene),
/* harmony export */   Skin: () => (/* reexport safe */ _skin__WEBPACK_IMPORTED_MODULE_7__.Skin),
/* harmony export */   Texture: () => (/* reexport safe */ _texture__WEBPACK_IMPORTED_MODULE_5__.Texture),
/* harmony export */   Transformation: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.Transformation),
/* harmony export */   Vector3: () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_9__.Vector3),
/* harmony export */   Vertex: () => (/* reexport safe */ _vertex__WEBPACK_IMPORTED_MODULE_6__.Vertex),
/* harmony export */   VertexColorMode: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.VertexColorMode),
/* harmony export */   WrappingMode: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_10__.WrappingMode),
/* harmony export */   exportGLB: () => (/* binding */ exportGLB),
/* harmony export */   exportGLTF: () => (/* binding */ exportGLTF),
/* harmony export */   exportGLTFZip: () => (/* binding */ exportGLTFZip)
/* harmony export */ });
/* harmony import */ var _asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _vertex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _skin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _gltf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15);
/* harmony import */ var _imageutils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11);
/* harmony import */ var _glb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var MODEL_NAME_GLTF = "model.gltf";
var MODEL_NAME_GLB = "model.glb";
/**
 * Creates a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options Export options
 * @returns Promise for an object, each key pointing to a file.
 */
function exportGLTF(asset, options) {
    return __awaiter(this, void 0, void 0, function () {
        var gltf, currentData, currentImg, binChunkBuffer, output, jsonSpacing, gltfString, doingGLB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = options || {};
                    gltf = (0,_gltf__WEBPACK_IMPORTED_MODULE_12__.createEmptyGLTF)();
                    gltf.asset.copyright = asset.copyright;
                    gltf.asset.generator = asset.generator;
                    gltf.extras.options = options;
                    (0,_gltf__WEBPACK_IMPORTED_MODULE_12__.addScenes)(gltf, asset);
                    currentData = 1;
                    currentImg = 1;
                    binChunkBuffer = null;
                    return [4 /*yield*/, Promise.all(gltf.extras.promises)];
                case 1:
                    _a.sent();
                    delete gltf.extras;
                    output = {};
                    jsonSpacing = typeof options.jsonSpacing === "number" ? options.jsonSpacing : 4;
                    gltfString = JSON.stringify(gltf, function (key, value) {
                        if (key === "extras")
                            return undefined;
                        if (value instanceof ArrayBuffer) {
                            var filename = void 0;
                            if ((0,_imageutils__WEBPACK_IMPORTED_MODULE_13__.arrayBufferIsPNG)(value)) {
                                switch (options.imageOutputType) {
                                    case _types__WEBPACK_IMPORTED_MODULE_10__.ImageOutputType.DataURI:
                                    case _types__WEBPACK_IMPORTED_MODULE_10__.ImageOutputType.GLB:
                                        break; // Not applicable
                                    default: // ImageOutputType.External
                                        filename = "img".concat(currentImg, ".png");
                                        currentImg++;
                                        output[filename] = value;
                                        return filename;
                                }
                            }
                            switch (options.bufferOutputType) {
                                case _types__WEBPACK_IMPORTED_MODULE_10__.BufferOutputType.DataURI:
                                    return (0,_imageutils__WEBPACK_IMPORTED_MODULE_13__.encodeBase64DataUri)(value);
                                case _types__WEBPACK_IMPORTED_MODULE_10__.BufferOutputType.GLB:
                                    if (binChunkBuffer)
                                        throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
                                    binChunkBuffer = value;
                                    return undefined;
                                default: // BufferOutputType.External
                                    filename = "data".concat(currentData, ".bin");
                                    currentData++;
                                    output[filename] = value;
                                    return filename;
                            }
                        }
                        return value;
                    }, jsonSpacing);
                    doingGLB = options.bufferOutputType === _types__WEBPACK_IMPORTED_MODULE_10__.BufferOutputType.GLB ||
                        options.imageOutputType === _types__WEBPACK_IMPORTED_MODULE_10__.ImageOutputType.GLB;
                    if (doingGLB) {
                        output[MODEL_NAME_GLB] = (0,_glb__WEBPACK_IMPORTED_MODULE_14__.createGLBBuffer)(gltfString, binChunkBuffer);
                    }
                    else {
                        output[MODEL_NAME_GLTF] = gltfString;
                    }
                    return [2 /*return*/, output];
            }
        });
    });
}
/**
 * Creates a ZIP file of a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param jsZip JSZip instance
 * @param options Export options
 * @returns A Promise to receive a ZIP blob is returned instead.
 */
function exportGLTFZip(asset, jsZip, options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, exportGLTF(asset, options).then(function (output) {
                    var zip = new jsZip();
                    for (var filename in output) {
                        zip.file(filename, output[filename]);
                    }
                    return zip.generateAsync({ type: "blob" });
                })];
        });
    });
}
/**
 * Creates a GLB binary format glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @returns An ArrayBuffer containing the GLB file.
 */
function exportGLB(asset) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, exportGLTF(asset, {
                    bufferOutputType: _types__WEBPACK_IMPORTED_MODULE_10__.BufferOutputType.GLB,
                    imageOutputType: _types__WEBPACK_IMPORTED_MODULE_10__.ImageOutputType.GLB,
                    jsonSpacing: 0,
                }).then(function (output) {
                    return output[MODEL_NAME_GLB];
                })];
        });
    });
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFAsset: () => (/* binding */ GLTFAsset)
/* harmony export */ });
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



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scene: () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var Scene = /** @class */ (function () {
    function Scene(name) {
        if (name === void 0) { name = ""; }
        this.name = "";
        this._nodes = [];
        this.name = name;
    }
    Scene.prototype.addNode = function (node) {
        if (this._nodes.indexOf(node) >= 0)
            return;
        // throw new Error("Node passed to addNode was added prior.");
        this._nodes.push(node);
    };
    Scene.prototype.removeNode = function (node) {
        var idx = node instanceof _node__WEBPACK_IMPORTED_MODULE_0__.Node ? this._nodes.indexOf(node) : node;
        if (idx >= 0 && idx < this._nodes.length)
            this._nodes.splice(idx, 1);
        return idx;
    };
    Scene.prototype.forEachNode = function (fn) {
        this._nodes.forEach(fn);
    };
    return Scene;
}());



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


var Node = /** @class */ (function () {
    function Node(name) {
        if (name === void 0) { name = ""; }
        this.name = "";
        this.animations = [];
        this._nodes = [];
        this.name = name;
    }
    Node.prototype.addNode = function (node) {
        if (this._nodes.indexOf(node) >= 0)
            return;
        // throw new Error("Node passed to addNode was added prior.");
        this._nodes.push(node);
    };
    Node.prototype.removeNode = function (node) {
        var idx = node instanceof Node ? this._nodes.indexOf(node) : node;
        if (idx >= 0 && idx < this._nodes.length)
            this._nodes.splice(idx, 1);
        return idx;
    };
    Node.prototype.forEachNode = function (fn) {
        this._nodes.forEach(fn);
    };
    Node.prototype.addAnimation = function (animation) {
        this.animations.push(animation);
    };
    Node.prototype.removeAnimation = function (animation) {
        var idx = animation instanceof _animation__WEBPACK_IMPORTED_MODULE_1__.Animation ? this.animations.indexOf(animation) : animation;
        if (idx >= 0 && idx < this.animations.length)
            this.animations.splice(idx, 1);
        return idx;
    };
    Node.prototype.setTranslation = function (x, y, z) {
        this._translation = new _math__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z);
    };
    Node.prototype.getTranslation = function () {
        return this._translation || new _math__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0);
    };
    Node.prototype.setRotationDegrees = function (x, y, z) {
        this.setRotationRadians((0,_math__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(x), (0,_math__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(y), (0,_math__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(z));
    };
    Node.prototype.setRotationRadians = function (x, y, z) {
        this._rotation = (0,_math__WEBPACK_IMPORTED_MODULE_0__.toQuaternion)(x, y, z);
    };
    Node.prototype.setRotationQuaternion = function (x, y, z, w) {
        this._rotation = new _math__WEBPACK_IMPORTED_MODULE_0__.Quaternion(x, y, z, w);
    };
    Node.prototype.getRotationQuaternion = function () {
        return this._rotation || new _math__WEBPACK_IMPORTED_MODULE_0__.Quaternion(0, 0, 0, 1);
    };
    Node.prototype.setScale = function (x, y, z) {
        this._scale = new _math__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z);
    };
    Node.prototype.getScale = function () {
        return this._scale || new _math__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 1, 1);
    };
    return Node;
}());



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix: () => (/* binding */ Matrix),
/* harmony export */   Matrix3x3: () => (/* binding */ Matrix3x3),
/* harmony export */   Matrix4x4: () => (/* binding */ Matrix4x4),
/* harmony export */   Quaternion: () => (/* binding */ Quaternion),
/* harmony export */   Vector3: () => (/* binding */ Vector3),
/* harmony export */   degreesToRadians: () => (/* binding */ degreesToRadians),
/* harmony export */   toQuaternion: () => (/* binding */ toQuaternion)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    return Vector3;
}());

var Quaternion = /** @class */ (function () {
    function Quaternion(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Quaternion.prototype.toArray = function () {
        return [this.x, this.y, this.z, this.w];
    };
    return Quaternion;
}());

function toQuaternion(x, y, z) {
    var cy = Math.cos(z * 0.5);
    var sy = Math.sin(z * 0.5);
    var cr = Math.cos(x * 0.5);
    var sr = Math.sin(x * 0.5);
    var cp = Math.cos(y * 0.5);
    var sp = Math.sin(y * 0.5);
    return new Quaternion(cy * sr * cp - sy * cr * sp, cy * cr * sp + sy * sr * cp, sy * cr * cp - cy * sr * sp, cy * cr * cp + sy * sr * sp);
}
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
// NxN Square Matrix
// Make sure to store as row-major
var Matrix = /** @class */ (function () {
    function Matrix(rows) {
        if (rows === void 0) { rows = 4; }
        this.data = Matrix.Identity(rows);
    }
    Object.defineProperty(Matrix.prototype, "m", {
        /**
         * Return the matrix values
         */
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "rows", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "cols", {
        get: function () {
            if (this.rows === 0)
                return 0;
            return this.data[0].length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initialize an identity square matrix
     */
    Matrix.Identity = function (rows) {
        var M = [];
        for (var r = 0; r < rows; ++r) {
            var Mrow = [];
            for (var c = 0; c < rows; ++c) {
                Mrow.push(r === c ? 1 : 0);
            }
            M.push(Mrow);
        }
        return M;
    };
    Matrix.IsIdentity = function (matrix) {
        var rows = matrix.rows;
        var cols = matrix.cols;
        if (rows !== cols)
            return false;
        for (var r = 0; r < rows; ++r) {
            for (var c = 0; c < cols; ++c) {
                if (matrix.data[r][c] != (r === c ? 1 : 0))
                    return false;
            }
        }
        return true;
    };
    return Matrix;
}());

var Matrix3x3 = /** @class */ (function (_super) {
    __extends(Matrix3x3, _super);
    function Matrix3x3() {
        return _super.call(this, 3) || this;
    }
    Matrix3x3.Identity = function () {
        return Matrix.Identity(3);
    };
    Matrix3x3.IsIdentity = function (matrix) {
        if (matrix.rows !== 3 || matrix.cols !== 3)
            return false;
        return Matrix.IsIdentity(matrix);
    };
    return Matrix3x3;
}(Matrix));

var Matrix4x4 = /** @class */ (function (_super) {
    __extends(Matrix4x4, _super);
    function Matrix4x4() {
        return _super.call(this, 4) || this;
    }
    Matrix4x4.Identity = function () {
        return Matrix.Identity(4);
    };
    Matrix4x4.IsIdentity = function (matrix) {
        if (matrix.rows !== 4 || matrix.cols !== 4)
            return false;
        return Matrix.IsIdentity(matrix);
    };
    return Matrix4x4;
}(Matrix));



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var Animation = /** @class */ (function () {
    function Animation(path, name) {
        if (name === void 0) { name = ""; }
        this.keyframes = [];
        this.name = "";
        this.path = path;
        this.name = name;
    }
    Animation.prototype.addKeyframe = function (time, value, interpType, extras) {
        console.assert(value.length >= 3);
        var kf = {
            interpType: interpType,
            time: time,
            value: value,
        };
        if (interpType === _types__WEBPACK_IMPORTED_MODULE_0__.InterpolationMode.CUBICSPLINE) {
            var ext = {};
            if (extras) {
                if (extras.inTangent)
                    ext.inTangent = extras.inTangent;
                if (extras.inTangentWeight)
                    ext.inTangentWeight = extras.inTangentWeight;
                if (extras.outTangent)
                    ext.outTangent = extras.outTangent;
                if (extras.outTangentWeight)
                    ext.outTangentWeight = extras.outTangentWeight;
            }
            if (Object.keys(ext).length > 0) {
                kf.extras = ext;
            }
        }
        this.keyframes.push(kf);
    };
    return Animation;
}());



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlphaMode: () => (/* binding */ AlphaMode),
/* harmony export */   BufferOutputType: () => (/* binding */ BufferOutputType),
/* harmony export */   BufferTarget: () => (/* binding */ BufferTarget),
/* harmony export */   ComponentType: () => (/* binding */ ComponentType),
/* harmony export */   DataType: () => (/* binding */ DataType),
/* harmony export */   ImageOutputType: () => (/* binding */ ImageOutputType),
/* harmony export */   InterpolationMode: () => (/* binding */ InterpolationMode),
/* harmony export */   MeshMode: () => (/* binding */ MeshMode),
/* harmony export */   RGBAColor: () => (/* binding */ RGBAColor),
/* harmony export */   RGBColor: () => (/* binding */ RGBColor),
/* harmony export */   Transformation: () => (/* binding */ Transformation),
/* harmony export */   VertexColorMode: () => (/* binding */ VertexColorMode),
/* harmony export */   WrappingMode: () => (/* binding */ WrappingMode)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BufferOutputType;
(function (BufferOutputType) {
    /** Create separate files for binary buffers (default) */
    BufferOutputType[BufferOutputType["External"] = 0] = "External";
    /** Embed buffers as data URIs. */
    BufferOutputType[BufferOutputType["DataURI"] = 1] = "DataURI";
    /**
     * Embed buffers as chunks in a GLB buffer.
     */
    BufferOutputType[BufferOutputType["GLB"] = 2] = "GLB";
})(BufferOutputType || (BufferOutputType = {}));
var ImageOutputType;
(function (ImageOutputType) {
    /** Create separate files for images (default) */
    ImageOutputType[ImageOutputType["External"] = 0] = "External";
    /** Embed images as data URIs. */
    ImageOutputType[ImageOutputType["DataURI"] = 1] = "DataURI";
    /**
     * Embed images as chunks in a GLB buffer.
     */
    ImageOutputType[ImageOutputType["GLB"] = 2] = "GLB";
})(ImageOutputType || (ImageOutputType = {}));
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["BYTE"] = 5120] = "BYTE";
    ComponentType[ComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    ComponentType[ComponentType["SHORT"] = 5122] = "SHORT";
    ComponentType[ComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    ComponentType[ComponentType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    ComponentType[ComponentType["FLOAT"] = 5126] = "FLOAT";
})(ComponentType || (ComponentType = {}));
var DataType;
(function (DataType) {
    DataType["SCALAR"] = "SCALAR";
    DataType["VEC2"] = "VEC2";
    DataType["VEC3"] = "VEC3";
    DataType["VEC4"] = "VEC4";
    DataType["MAT2"] = "MAT2";
    DataType["MAT3"] = "MAT3";
    DataType["MAT4"] = "MAT4";
})(DataType || (DataType = {}));
var MeshMode;
(function (MeshMode) {
    MeshMode[MeshMode["POINTS"] = 0] = "POINTS";
    MeshMode[MeshMode["LINES"] = 1] = "LINES";
    MeshMode[MeshMode["LINE_LOOP"] = 2] = "LINE_LOOP";
    MeshMode[MeshMode["LINE_STRIP"] = 3] = "LINE_STRIP";
    MeshMode[MeshMode["TRIANGLES"] = 4] = "TRIANGLES";
    MeshMode[MeshMode["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
    MeshMode[MeshMode["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(MeshMode || (MeshMode = {}));
var WrappingMode;
(function (WrappingMode) {
    WrappingMode[WrappingMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    WrappingMode[WrappingMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    WrappingMode[WrappingMode["REPEAT"] = 10497] = "REPEAT";
})(WrappingMode || (WrappingMode = {}));
var AlphaMode;
(function (AlphaMode) {
    AlphaMode["OPAQUE"] = "OPAQUE";
    AlphaMode["MASK"] = "MASK";
    AlphaMode["BLEND"] = "BLEND";
})(AlphaMode || (AlphaMode = {}));
var RGBColor = /** @class */ (function () {
    function RGBColor() {
        /** Red, between 0 and 1. */
        this.r = 1;
        /** Green, between 0 and 1 */
        this.g = 1;
        /** Blue, between 0 and 1 */
        this.b = 1;
    }
    return RGBColor;
}());

var RGBAColor = /** @class */ (function (_super) {
    __extends(RGBAColor, _super);
    function RGBAColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Alpha, between 0 and 1 */
        _this.a = 1;
        return _this;
    }
    return RGBAColor;
}(RGBColor));

// Matches THREE Colors
var VertexColorMode;
(function (VertexColorMode) {
    VertexColorMode[VertexColorMode["NoColors"] = 0] = "NoColors";
    VertexColorMode[VertexColorMode["FaceColors"] = 1] = "FaceColors";
    VertexColorMode[VertexColorMode["VertexColors"] = 2] = "VertexColors";
})(VertexColorMode || (VertexColorMode = {}));
var InterpolationMode;
(function (InterpolationMode) {
    InterpolationMode["LINEAR"] = "LINEAR";
    InterpolationMode["STEP"] = "STEP";
    InterpolationMode["CUBICSPLINE"] = "CUBICSPLINE";
})(InterpolationMode || (InterpolationMode = {}));
var Transformation;
(function (Transformation) {
    Transformation["TRANSLATION"] = "translation";
    Transformation["ROTATION"] = "rotation";
    Transformation["SCALE"] = "scale";
})(Transformation || (Transformation = {}));
var BufferTarget;
(function (BufferTarget) {
    BufferTarget[BufferTarget["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
    BufferTarget[BufferTarget["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
})(BufferTarget || (BufferTarget = {}));


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mesh: () => (/* binding */ Mesh)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var Mesh = /** @class */ (function () {
    function Mesh() {
        this.material = [];
        this.mode = _types__WEBPACK_IMPORTED_MODULE_0__.MeshMode.TRIANGLES;
        this._vertices = [];
        this._faceColors = [];
        this._materialIndices = [];
    }
    Mesh.prototype.addFace = function (v1, v2, v3, color, materialIndex) {
        if (!v1 || !v2 || !v3) {
            throw new Error("Vertex passed to addFace was null or undefined");
        }
        this._vertices.push(v1);
        this._vertices.push(v2);
        this._vertices.push(v3);
        this._faceColors.push(color);
        if (typeof materialIndex === "undefined")
            materialIndex = -1;
        this._materialIndices.push(materialIndex);
    };
    Mesh.prototype.forEachFace = function (fn) {
        var faceCount = this._vertices.length / 3;
        for (var i = 0; i < faceCount; i++) {
            if (fn(this._vertices[i * 3], this._vertices[i * 3 + 1], this._vertices[i * 3 + 2], this._faceColors[i], this._materialIndices[i])) {
                break;
            }
        }
    };
    return Mesh;
}());



/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Material: () => (/* binding */ Material)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var Material = /** @class */ (function () {
    function Material() {
        this.name = "";
        this.alphaCutoff = 0.5;
        this.alphaMode = _types__WEBPACK_IMPORTED_MODULE_0__.AlphaMode.OPAQUE;
        this.doubleSided = false;
        this.vertexColorMode = _types__WEBPACK_IMPORTED_MODULE_0__.VertexColorMode.NoColors;
        this.pbrMetallicRoughness = {
            metallicFactor: 1.0,
            roughnessFactor: 1.0,
        };
    }
    return Material;
}());



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Texture: () => (/* binding */ Texture)
/* harmony export */ });
/* harmony import */ var _imageutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/** Represents a model texture. */
var Texture = /** @class */ (function () {
    function Texture(image) {
        this.wrapS = _types__WEBPACK_IMPORTED_MODULE_1__.WrappingMode.CLAMP_TO_EDGE;
        this.wrapT = _types__WEBPACK_IMPORTED_MODULE_1__.WrappingMode.CLAMP_TO_EDGE;
        this.image = image;
    }
    Object.defineProperty(Texture.prototype, "image", {
        get: function () {
            return this.__image;
        },
        set: function (val) {
            if (!val) {
                throw new Error("Why is the texture image being unset?");
            }
            if (val instanceof ArrayBuffer && !(0,_imageutils__WEBPACK_IMPORTED_MODULE_0__.arrayBufferIsPNG)(val)) {
                throw new Error("Texture was given an ArrayBuffer, but it does not appear to contain PNG image data.");
            }
            if (typeof val === "string" && !val.startsWith("data:image/png;base64,")) {
                throw new Error("Texture was given a string, but it does not appear be a data uri with base64 encoded image/png data.");
            }
            this.__image = val;
        },
        enumerable: false,
        configurable: true
    });
    return Texture;
}());



/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayBufferIsPNG: () => (/* binding */ arrayBufferIsPNG),
/* harmony export */   dataUriToArrayBuffer: () => (/* binding */ dataUriToArrayBuffer),
/* harmony export */   encodeBase64DataUri: () => (/* binding */ encodeBase64DataUri),
/* harmony export */   imageToArrayBuffer: () => (/* binding */ imageToArrayBuffer),
/* harmony export */   imageToDataURI: () => (/* binding */ imageToDataURI)
/* harmony export */ });
/**
 * Converts an image into a Data URI string.
 * @param image
 */
function imageToDataURI(image) {
    if (typeof image === "string") {
        return image;
    }
    if (image instanceof ArrayBuffer) {
        return encodeBase64DataUri(image, "image/png");
    }
    var canvas = _imageTypeToCanvas(image);
    return canvas.toDataURL();
}
/**
 * Converts an image into an ArrayBuffer.
 * @param image
 */
function imageToArrayBuffer(image) {
    if (typeof image === "string") {
        return Promise.resolve(dataUriToArrayBuffer(image));
    }
    if (image instanceof ArrayBuffer) {
        return Promise.resolve(image);
    }
    var canvas = _imageTypeToCanvas(image);
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
    });
    canvas.toBlob(function (blob) {
        if (!blob) {
            promiseReject("Unable to convert image to PNG");
            return;
        }
        var reader = new FileReader();
        reader.addEventListener("loadend", function () {
            promiseResolve(reader.result);
        });
        reader.readAsArrayBuffer(blob);
    }, "image/png");
    return promise;
}
function _imageTypeToCanvas(image) {
    var canvas;
    if (image instanceof HTMLImageElement) {
        canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context_1 = canvas.getContext("2d");
        context_1.drawImage(image, 0, 0, image.width, image.height);
    }
    else {
        canvas = image;
    }
    return canvas;
}
/**
 * Converts a DataURI to an ArrayBuffer.
 * @param dataUri DataURI. `data:mimeType;base64,...`
 */
function dataUriToArrayBuffer(dataUri) {
    var binary = atob(dataUri.split(",")[1]);
    var buffer = new ArrayBuffer(binary.length);
    var byteArray = new Uint8Array(buffer);
    for (var i = 0; i < binary.length; i++) {
        byteArray[i] = binary.charCodeAt(i);
    }
    return buffer;
}
/**
 * Converts an ArrayBuffer into a base64 Data URI string.
 * @param buf Array buffer
 * @param mimeType Mime type of the data. Default is application/octet-stream.
 */
function encodeBase64DataUri(buf, mimeType) {
    var codes = [];
    var uint8arr = new Uint8Array(buf);
    for (var i = 0; i < uint8arr.length; i++) {
        codes.push(String.fromCharCode(uint8arr[i]));
    }
    var mime = mimeType || "application/octet-stream";
    var b64 = btoa(codes.join(""));
    var uri = "data:".concat(mime, ";base64,").concat(b64);
    return uri;
}
/** Determines if an ArrayBuffer holds a PNG format image. */
function arrayBufferIsPNG(buffer) {
    // PNG starts with 89 50 4E 47 0D 0A 1A 0A
    if (buffer.byteLength < 8)
        return false;
    var arr = new Uint8Array(buffer);
    return arr[0] === 0x89
        && arr[1] === 0x50
        && arr[2] === 0x4E
        && arr[3] === 0x47
        && arr[4] === 0x0D
        && arr[5] === 0x0A
        && arr[6] === 0x1A
        && arr[7] === 0x0A;
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vertex: () => (/* binding */ Vertex)
/* harmony export */ });
/** Represents a mesh vertex. */
var Vertex = /** @class */ (function () {
    function Vertex() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.u = 0;
        this.v = 0;
    }
    return Vertex;
}());



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skin: () => (/* binding */ Skin)
/* harmony export */ });
var Skin = /** @class */ (function () {
    function Skin(skeletonNode, name) {
        if (skeletonNode === void 0) { skeletonNode = null; }
        if (name === void 0) { name = ""; }
        this.name = "";
        this.skeletonNode = skeletonNode;
        this.name = name;
    }
    return Skin;
}());



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Buffer: () => (/* binding */ Buffer),
/* harmony export */   BufferView: () => (/* binding */ BufferView)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

var Buffer = /** @class */ (function () {
    function Buffer(gltf) {
        this._bufferViews = [];
        this._finalized = false;
        this._gltf = gltf;
        if (!gltf.buffers)
            gltf.buffers = [];
        this._index = gltf.buffers.length;
        var gltfBuffer = {
            byteLength: -1,
        };
        gltf.buffers.push(gltfBuffer);
        this._gltfBuffer = gltfBuffer;
    }
    Buffer.prototype.getIndex = function () {
        return this._index;
    };
    Buffer.prototype.addBufferView = function (componentType, dataType) {
        if (this._finalizePromise)
            throw new Error("Cannot add buffer view after finalizing buffer");
        var view = new BufferView(this, this._gltf, componentType, dataType);
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
    Buffer.prototype.getViewFinalizePromises = function (targetBufferView) {
        var promises = [];
        for (var _i = 0, _a = this._bufferViews; _i < _a.length; _i++) {
            var view = _a[_i];
            if (targetBufferView && view === targetBufferView) {
                return promises;
            }
            promises.push(view.finalized);
        }
        return promises;
    };
    Buffer.prototype.getArrayBuffer = function () {
        if (!this._finalized)
            throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
        var byteLength = this._getTotalSize();
        var buffer = new ArrayBuffer(byteLength);
        var currentIndex = 0;
        for (var _i = 0, _a = this._bufferViews; _i < _a.length; _i++) {
            var bufferView = _a[_i];
            bufferView.writeOutToBuffer(buffer, currentIndex);
            currentIndex += bufferView.getSize();
        }
        return buffer;
    };
    Buffer.prototype.finalize = function () {
        var _this = this;
        if (this._finalizePromise)
            throw new Error("Buffer ".concat(this._index, " was already finalized"));
        this._finalizePromise = new Promise(function (resolve) {
            resolve(Promise.all(_this.getViewFinalizePromises()));
        }).then(function () {
            _this._finalized = true;
            var arrayBuffer = _this.getArrayBuffer();
            _this._gltfBuffer.byteLength = arrayBuffer.byteLength;
            _this._gltfBuffer.uri = arrayBuffer; // Still not totally finalized, see stringify
        });
        this._gltf.extras.promises.push(this._finalizePromise);
        return this._finalizePromise;
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

var BufferView = /** @class */ (function () {
    function BufferView(buffer, gltf, componentType, dataType) {
        this._data = [];
        this._finalized = false;
        this._accessorIndex = -1;
        this._accessorAttr = null;
        this._accessorMin = null;
        this._accessorMax = null;
        this._buffer = buffer;
        this._componentType = componentType;
        this._dataType = dataType;
        if (!gltf.bufferViews)
            gltf.bufferViews = [];
        this._index = gltf.bufferViews.length;
        this._gltfBufferView = {
            buffer: buffer.getIndex(),
            byteLength: -1,
        };
        var elementSize = this._getElementSize();
        if (elementSize >= 4) { // Not a very good check.
            this._gltfBufferView.byteStride = elementSize;
        }
        gltf.bufferViews.push(this._gltfBufferView);
    }
    BufferView.prototype.getBuffer = function () {
        return this._buffer;
    };
    BufferView.prototype.getIndex = function () {
        return this._index;
    };
    BufferView.prototype.push = function (item) {
        var writeIndex = this._data.length;
        this._data.push(item);
        if (this._accessorIndex >= 0) {
            var minmaxIndex = writeIndex % this._numComponentsForDataType();
            if (!this._accessorMin || !this._accessorMax) {
                throw new Error("Unexpected accessor state");
            }
            var currentMin = this._accessorMin[minmaxIndex];
            if (typeof currentMin !== "number")
                this._accessorMin[minmaxIndex] = item;
            else
                this._accessorMin[minmaxIndex] = Math.min(currentMin, item);
            var currentMax = this._accessorMax[minmaxIndex];
            if (typeof currentMax !== "number")
                this._accessorMax[minmaxIndex] = item;
            else
                this._accessorMax[minmaxIndex] = Math.max(currentMax, item);
        }
    };
    BufferView.prototype.getDataSize = function () {
        return this._data.length * this._sizeOfComponentType();
    };
    BufferView.prototype.getSize = function () {
        // Technically there are some cases where the data could be more compact,
        // but to be safe, we just always align each view to 4 bytes.
        return makeDivisibleBy(this.getDataSize(), 4);
    };
    BufferView.prototype.getByteOffset = function () {
        if (!this._finalized)
            throw new Error("Cannot get BufferView offset until it is finalized");
        return this._buffer.getByteOffset(this);
    };
    BufferView.prototype.writeOutToBuffer = function (buffer, startIndex) {
        if (startIndex === void 0) { startIndex = this.getSize(); }
        var dataView = new DataView(buffer, startIndex);
        var sizeOfComponentType = this._sizeOfComponentType();
        for (var i = 0; i < this._data.length; i++) {
            var val = this._data[i];
            this._writeValue(dataView, i * sizeOfComponentType, val);
        }
    };
    BufferView.prototype.writeAsync = function (buffer) {
        var _this = this;
        if (this._asyncWritePromise)
            throw new Error("Can't write multiple buffer view values asynchronously");
        this._asyncWritePromise = buffer.then(function (arrayBuffer) {
            var uintArray = new Uint8Array(arrayBuffer);
            for (var i = 0; i < uintArray.byteLength; i++) {
                _this._data.push(uintArray[i]);
            }
            delete _this._asyncWritePromise;
        });
        return this._asyncWritePromise;
    };
    BufferView.prototype.startAccessor = function (attr) {
        if (attr === void 0) { attr = null; }
        if (this._accessorIndex >= 0)
            throw "Accessor was started without ending the previous one";
        this._accessorIndex = this._data.length;
        this._accessorAttr = attr;
        this._accessorMin = new Array(this._numComponentsForDataType());
        this._accessorMax = new Array(this._numComponentsForDataType());
    };
    BufferView.prototype.endAccessor = function () {
        if (this._accessorIndex < 0)
            throw new Error("An accessor was not started, but was attempted to be ended");
        var elementSize = this._getElementSize();
        var numComponentsForDataType = this._numComponentsForDataType();
        var numElements = (this._data.length - this._accessorIndex) / numComponentsForDataType;
        if (numElements % 1)
            throw new Error("An accessor was ended with missing component values");
        if (!this._accessorMin || !this._accessorMax) {
            throw new Error("Unexpected accessor state");
        }
        for (var i = 0; i < this._accessorMin.length; i++) {
            if (typeof this._accessorMin[i] !== "number")
                this._accessorMin[i] = 0;
            if (typeof this._accessorMax[i] !== "number")
                this._accessorMax[i] = 0;
        }
        var info = {
            byteOffset: elementSize * (this._accessorIndex / numComponentsForDataType), // All previous data
            componentType: this._componentType,
            count: numElements,
            type: this._dataType,
            min: this._accessorMin,
            max: this._accessorMax,
        };
        switch (this._accessorAttr) {
            case "TEXCOORD_0":
            case "TEXCOORD_1":
            case "COLOR_0":
                switch (this._componentType) {
                    case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_BYTE:
                    case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_SHORT:
                        info.normalized = true;
                        break;
                }
                break;
        }
        this._accessorIndex = -1;
        this._accessorAttr = null;
        this._accessorMin = null;
        this._accessorMax = null;
        return info;
    };
    Object.defineProperty(BufferView.prototype, "finalized", {
        get: function () {
            var _this = this;
            if (!this._finalizedPromise) {
                if (this._finalized) {
                    return this._finalizedPromise = Promise.resolve();
                }
                else {
                    return this._finalizedPromise = new Promise(function (resolve) {
                        _this._finalizedPromiseResolve = resolve;
                    });
                }
            }
            return this._finalizedPromise;
        },
        enumerable: false,
        configurable: true
    });
    BufferView.prototype.finalize = function () {
        var _this = this;
        var gltfBufferView = this._gltfBufferView;
        return new Promise(function (resolve) {
            var prereqs = _this._buffer.getViewFinalizePromises(_this);
            if (_this._asyncWritePromise)
                prereqs.push(_this._asyncWritePromise);
            resolve(Promise.all(prereqs));
        }).then(function () {
            _this._finalized = true;
            gltfBufferView.byteOffset = _this.getByteOffset();
            gltfBufferView.byteLength = _this.getDataSize();
            if (_this._finalizedPromiseResolve)
                _this._finalizedPromiseResolve();
        });
    };
    BufferView.prototype._getElementSize = function () {
        return this._sizeOfComponentType() * this._numComponentsForDataType();
    };
    BufferView.prototype._sizeOfComponentType = function () {
        switch (this._componentType) {
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.BYTE:
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_BYTE:
                return 1;
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.SHORT:
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_SHORT:
                return 2;
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_INT:
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT:
                return 4;
        }
        throw "Unrecognized component type ".concat(this._componentType);
    };
    BufferView.prototype._numComponentsForDataType = function () {
        switch (this._dataType) {
            case _types__WEBPACK_IMPORTED_MODULE_0__.DataType.SCALAR:
                return 1;
            case _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC2:
                return 2;
            case _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC3:
                return 3;
            case _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC4:
            case _types__WEBPACK_IMPORTED_MODULE_0__.DataType.MAT2:
                return 4;
            case _types__WEBPACK_IMPORTED_MODULE_0__.DataType.MAT3:
                return 9;
            case _types__WEBPACK_IMPORTED_MODULE_0__.DataType.MAT4:
                return 16;
        }
        throw "Unsupported data type";
    };
    BufferView.prototype._writeValue = function (dataView, index, val) {
        switch (this._componentType) {
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.BYTE:
                dataView.setInt8(index, val);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_BYTE:
                dataView.setUint8(index, val);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.SHORT:
                dataView.setInt16(index, val, true);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_SHORT:
                dataView.setUint16(index, val, true);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_INT:
                dataView.setUint32(index, val, true);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT:
                dataView.setFloat32(index, val, true);
                break;
            default:
                throw "Unsupported data type";
        }
    };
    return BufferView;
}());

function makeDivisibleBy(num, by) {
    return by * Math.ceil(num / by);
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAccessor: () => (/* binding */ addAccessor),
/* harmony export */   addAnimations: () => (/* binding */ addAnimations),
/* harmony export */   addBuffer: () => (/* binding */ addBuffer),
/* harmony export */   addScenes: () => (/* binding */ addScenes),
/* harmony export */   addSkin: () => (/* binding */ addSkin),
/* harmony export */   createEmptyGLTF: () => (/* binding */ createEmptyGLTF)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _imageutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);




function createEmptyGLTF() {
    return {
        asset: {
            version: "2.0",
        },
        extras: {
            options: {},
            binChunkBuffer: null,
            promises: [],
            nodeIndices: new Map(),
        },
    };
}
function addScenes(gltf, asset) {
    gltf.scene = asset.defaultScene;
    var doingGLB = gltf.extras.options.bufferOutputType === _types__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.GLB ||
        gltf.extras.options.imageOutputType === _types__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.GLB;
    if (doingGLB) {
        gltf.extras.binChunkBuffer = addBuffer(gltf);
    }
    asset.forEachScene(function (scene) {
        addScene(gltf, scene);
    });
    if (doingGLB) {
        gltf.extras.binChunkBuffer.finalize();
    }
}
function addScene(gltf, scene) {
    if (!gltf.scenes)
        gltf.scenes = [];
    var gltfScene = {};
    if (scene.name)
        gltfScene.name = scene.name;
    scene.forEachNode(function (node) {
        if (!gltfScene.nodes)
            gltfScene.nodes = [];
        var index = addNode(gltf, node);
        gltfScene.nodes.push(index);
    });
    gltf.scenes.push(gltfScene);
}
function addNode(gltf, node) {
    var existingIndex = getNodeIndex(gltf, node);
    if (existingIndex >= 0) {
        return existingIndex;
    }
    if (!gltf.nodes)
        gltf.nodes = [];
    var gltfNode = {};
    if (node.name)
        gltfNode.name = node.name;
    var translation = node.getTranslation();
    if (translation.x !== 0 || translation.y !== 0 || translation.z !== 0)
        gltfNode.translation = translation.toArray();
    var rotation = node.getRotationQuaternion();
    if (rotation.x !== 0 ||
        rotation.y !== 0 ||
        rotation.z !== 0 ||
        rotation.w !== 1)
        gltfNode.rotation = rotation.toArray();
    var scale = node.getScale();
    if (scale.x !== 1 || scale.y !== 1 || scale.z !== 1)
        gltfNode.scale = scale.toArray();
    var addedIndex = gltf.nodes.length;
    setNodeIndex(gltf, node, addedIndex);
    gltf.nodes.push(gltfNode);
    if (node.animations.length > 0) {
        addAnimations(gltf, node.animations, addedIndex);
    }
    if (node.mesh) {
        gltfNode.mesh = addMesh(gltf, node.mesh);
    }
    node.forEachNode(function (node) {
        if (!gltfNode.children)
            gltfNode.children = [];
        var index = addNode(gltf, node);
        gltfNode.children.push(index);
    });
    if (node.skin) {
        gltfNode.skin = addSkin(gltf, node.skin, node);
    }
    return addedIndex;
}
function getJointIndexAndInverseBindMatrices(gltf, node) {
    var nodeIndex = getNodeIndex(gltf, node);
    if (nodeIndex === -1) {
        throw new Error("Node should be added to gltf before calling getJointIndexAndInverseBindMatrices");
    }
    var joints = [nodeIndex];
    var ibms = [node.inverseBindMatrix];
    node.forEachNode(function (node) {
        var data = getJointIndexAndInverseBindMatrices(gltf, node);
        joints = joints.concat(data[0]);
        ibms = ibms.concat(data[1]);
    });
    return [joints, ibms];
}
function addSkin(gltf, skin, node) {
    if (!gltf.skins) {
        gltf.skins = [];
    }
    var addedIndex = gltf.skins.length;
    var gltfSkin = {
        joints: [],
    };
    gltf.skins.push(gltfSkin);
    // add name (if exists)
    if (skin.name.length > 0)
        gltfSkin.name = skin.name;
    // add skeleton (if exists)
    var skeletonNode = skin.skeletonNode;
    if (skeletonNode) {
        var existingIndex = getNodeIndex(gltf, skeletonNode);
        if (existingIndex === -1) {
            gltfSkin.skeleton = addNode(gltf, skeletonNode);
        }
        else {
            gltfSkin.skeleton = existingIndex;
        }
    }
    // add joints (required) and inversebindmatrices [IBM], if necessary
    var rootNode = skeletonNode ? skeletonNode : node;
    var data = getJointIndexAndInverseBindMatrices(gltf, rootNode);
    gltfSkin.joints = data[0];
    var ibms = data[1];
    // check if there are any non default IBMs, and if so, create a new accessor
    var hasIBM = false;
    for (var _i = 0, ibms_1 = ibms; _i < ibms_1.length; _i++) {
        var m = ibms_1[_i];
        if (m && m.rows === 4 && m.cols === 4 && !_math__WEBPACK_IMPORTED_MODULE_3__.Matrix4x4.IsIdentity(m)) {
            hasIBM = true;
            break;
        }
    }
    if (!hasIBM) {
        return addedIndex;
    }
    // init skin buffer
    var singleGLBBuffer = gltf.extras.options.bufferOutputType === _types__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.GLB;
    var skinBuffer = singleGLBBuffer
        ? gltf.extras.binChunkBuffer
        : addBuffer(gltf);
    // init skin bufferView
    var skinBufferView = skinBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.MAT4);
    // init skin accessor
    skinBufferView.startAccessor();
    for (var _a = 0, ibms_2 = ibms; _a < ibms_2.length; _a++) {
        var ibm = ibms_2[_a];
        var m = ibm instanceof _math__WEBPACK_IMPORTED_MODULE_3__.Matrix4x4 ? ibm : new _math__WEBPACK_IMPORTED_MODULE_3__.Matrix4x4();
        // GLTF2.0 uses column major matrix
        for (var c = 0; c < 4; c++) {
            for (var r = 0; r < 4; r++) {
                skinBufferView.push(m.data[r][c]);
            }
        }
    }
    // complete and clean up
    var skinAccessor = skinBufferView.endAccessor();
    var skinAccessor_idx = addAccessor(gltf, skinBufferView.getIndex(), skinAccessor);
    gltfSkin.inverseBindMatrices = skinAccessor_idx;
    skinBufferView.finalize();
    if (!singleGLBBuffer)
        skinBuffer.finalize();
    return addedIndex;
}
function addAnimations(gltf, animations, nodeIndex) {
    if (animations.length === 0)
        return;
    var singleGLBBuffer = gltf.extras.options.bufferOutputType === _types__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.GLB;
    var animBuffer = singleGLBBuffer
        ? gltf.extras.binChunkBuffer
        : addBuffer(gltf);
    var timeBufferView = animBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.SCALAR);
    var vec4BufferView; // ComponentType.FLOAT, DataType.VEC4
    var vec3BufferView; // ComponentType.FLOAT, DataType.VEC3
    if (!gltf.animations || gltf.animations.length === 0) {
        var gltfAnim_1 = {
            channels: [],
            samplers: [],
        };
        gltf.animations = [gltfAnim_1];
    }
    var gltfAnim = gltf.animations[0];
    if (animations[0].name && !gltfAnim.name)
        // TODO: Animation names
        gltfAnim.name = animations[0].name;
    function _completeAnimation(animBufferView, interpType, path) {
        var timeAccessor = timeBufferView.endAccessor();
        var timeAccessor_idx = addAccessor(gltf, timeBufferView.getIndex(), timeAccessor);
        var animAccessor = animBufferView.endAccessor();
        var animAccessor_idx = addAccessor(gltf, animBufferView.getIndex(), animAccessor);
        // then create samplers (input: times accessor idx, output: values accessor idx)
        var sampler = {
            input: timeAccessor_idx,
            output: animAccessor_idx,
            interpolation: interpType,
        };
        // then create channels (sampler: get sampler idx from above)
        var channel = {
            sampler: gltfAnim.samplers.length,
            target: {
                node: nodeIndex,
                path: path,
            },
        };
        gltfAnim.samplers.push(sampler);
        gltfAnim.channels.push(channel);
    }
    for (var _i = 0, animations_1 = animations; _i < animations_1.length; _i++) {
        var anim = animations_1[_i];
        if (!anim.keyframes || anim.keyframes.length == 0) {
            continue;
        }
        // push to channels and samplers
        var path = anim.path;
        var isVec4 = anim.keyframes[0].value.length === 4;
        var animBufferView = void 0;
        if (isVec4) {
            if (!vec4BufferView) {
                vec4BufferView = animBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC4);
            }
            animBufferView = vec4BufferView;
        }
        else {
            if (!vec3BufferView) {
                vec3BufferView = animBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC3);
            }
            animBufferView = vec3BufferView;
        }
        // add accessors
        timeBufferView.startAccessor();
        animBufferView.startAccessor();
        var prev_interpType = anim.keyframes[0].interpType;
        var ix = 0;
        var total_kf = anim.keyframes.length;
        for (var idx = 0; idx < total_kf; ++idx) {
            var keyframe = anim.keyframes[idx];
            var interpType = keyframe.interpType;
            if (interpType != prev_interpType) {
                _completeAnimation(animBufferView, prev_interpType, path);
                timeBufferView.startAccessor();
                animBufferView.startAccessor();
                ix = 0;
            }
            var isSpline = interpType === _types__WEBPACK_IMPORTED_MODULE_0__.InterpolationMode.CUBICSPLINE;
            if (isSpline && isVec4)
                throw new Error("CUBICSPLINE for Vector4 not implemented!");
            var time = keyframe.time, value = keyframe.value;
            timeBufferView.push(time);
            if (isSpline) {
                var spline_info = keyframe.extras;
                var outTangent = [0, 0, 0];
                var inTangent = [0, 0, 0];
                if ((spline_info === null || spline_info === void 0 ? void 0 : spline_info.inTangent) && ix > 0) {
                    inTangent = spline_info.inTangent;
                }
                if ((spline_info === null || spline_info === void 0 ? void 0 : spline_info.outTangent) &&
                    idx < total_kf - 1 &&
                    anim.keyframes[idx + 1].interpType === _types__WEBPACK_IMPORTED_MODULE_0__.InterpolationMode.CUBICSPLINE) {
                    outTangent = spline_info.outTangent;
                }
                var data = [inTangent, value, outTangent];
                for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
                    var d = data_1[_a];
                    for (var j = 0; j < 3; ++j) {
                        animBufferView.push(d[j]); // aaavvvbbb, a=inTangent, v=value, b=outTangent
                    }
                }
            }
            else {
                var tj = isVec4 ? 4 : 3;
                for (var j = 0; j < tj; ++j) {
                    animBufferView.push(value[j]);
                }
            }
            ix++;
            prev_interpType = interpType;
        }
        _completeAnimation(animBufferView, prev_interpType, path);
    }
    timeBufferView.finalize();
    if (vec4BufferView)
        vec4BufferView.finalize();
    if (vec3BufferView)
        vec3BufferView.finalize();
    if (!singleGLBBuffer)
        animBuffer.finalize();
}
function addMesh(gltf, mesh) {
    if (!gltf.meshes)
        gltf.meshes = [];
    if (mesh.mode !== _types__WEBPACK_IMPORTED_MODULE_0__.MeshMode.TRIANGLES)
        throw "MeshMode other than TRIANGLES not currently supported";
    addMaterials(gltf, mesh.material);
    var gltfMesh = {
        primitives: [],
    };
    var addedIndex = gltf.meshes.length;
    gltf.meshes.push(gltfMesh);
    var singleGLBBuffer = gltf.extras.options.bufferOutputType === _types__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.GLB;
    var meshBuffer;
    if (singleGLBBuffer) {
        meshBuffer = gltf.extras.binChunkBuffer;
    }
    else {
        meshBuffer = addBuffer(gltf);
    }
    var vertexBufferView = meshBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC3);
    var hasNormals = meshHasVertexNormals(mesh);
    var vertexNormalBufferView;
    if (hasNormals) {
        vertexNormalBufferView = meshBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC3);
    }
    var vertexUVBufferView = meshBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC2);
    var vertexColorBufferView;
    function _ensureColorBufferView() {
        if (vertexColorBufferView)
            return;
        vertexColorBufferView = meshBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_BYTE, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC4);
    }
    function _completeMeshPrimitive(materialIndex) {
        var vertexBufferAccessorInfo = vertexBufferView.endAccessor();
        var vertexNormalBufferAccessorInfo = vertexNormalBufferView === null || vertexNormalBufferView === void 0 ? void 0 : vertexNormalBufferView.endAccessor();
        var vertexUVBufferAccessorInfo = vertexUVBufferView.endAccessor();
        var primitive = {
            attributes: {
                POSITION: addAccessor(gltf, vertexBufferView.getIndex(), vertexBufferAccessorInfo),
                TEXCOORD_0: addAccessor(gltf, vertexUVBufferView.getIndex(), vertexUVBufferAccessorInfo),
            },
            mode: mesh.mode,
        };
        if (vertexNormalBufferAccessorInfo && vertexNormalBufferView) {
            primitive.attributes.NORMAL = addAccessor(gltf, vertexNormalBufferView.getIndex(), vertexNormalBufferAccessorInfo);
        }
        if (materialIndex >= 0) {
            primitive.material = materialIndex;
            // Only add color data if it is per-face/vertex.
            var material = mesh.material[materialIndex];
            if (material.vertexColorMode !== _types__WEBPACK_IMPORTED_MODULE_0__.VertexColorMode.NoColors) {
                var vertexColorBufferAccessorInfo = vertexColorBufferView.endAccessor();
                primitive.attributes["COLOR_0"] = addAccessor(gltf, vertexColorBufferView.getIndex(), vertexColorBufferAccessorInfo);
            }
        }
        return primitive;
    }
    var lastMaterialIndex = null;
    mesh.forEachFace(function (v1, v2, v3, color, materialIndex) {
        var currentMaterial = null;
        if (materialIndex >= 0)
            currentMaterial = mesh.material[materialIndex];
        // Need to start new accessors
        if (lastMaterialIndex !== materialIndex) {
            // And end the previous ones.
            if (lastMaterialIndex !== null) {
                var primitive = _completeMeshPrimitive(lastMaterialIndex);
                gltfMesh.primitives.push(primitive);
            }
            vertexBufferView.startAccessor("POSITION");
            vertexNormalBufferView === null || vertexNormalBufferView === void 0 ? void 0 : vertexNormalBufferView.startAccessor("NORMAL");
            vertexUVBufferView.startAccessor("TEXCOORD_0");
            if (currentMaterial &&
                currentMaterial.vertexColorMode !== _types__WEBPACK_IMPORTED_MODULE_0__.VertexColorMode.NoColors) {
                _ensureColorBufferView();
                vertexColorBufferView.startAccessor("COLOR_0");
            }
            lastMaterialIndex = materialIndex;
        }
        // Positions
        vertexBufferView.push(v1.x);
        vertexBufferView.push(v1.y);
        vertexBufferView.push(v1.z);
        vertexBufferView.push(v2.x);
        vertexBufferView.push(v2.y);
        vertexBufferView.push(v2.z);
        vertexBufferView.push(v3.x);
        vertexBufferView.push(v3.y);
        vertexBufferView.push(v3.z);
        // Vertex normals
        if (vertexNormalBufferView) {
            vertexNormalBufferView.push(v1.normalX);
            vertexNormalBufferView.push(v1.normalY);
            vertexNormalBufferView.push(v1.normalZ);
            vertexNormalBufferView.push(v2.normalX);
            vertexNormalBufferView.push(v2.normalY);
            vertexNormalBufferView.push(v2.normalZ);
            vertexNormalBufferView.push(v3.normalX);
            vertexNormalBufferView.push(v3.normalY);
            vertexNormalBufferView.push(v3.normalZ);
        }
        // Texture UV coords
        vertexUVBufferView.push(v1.u);
        vertexUVBufferView.push(v1.v);
        vertexUVBufferView.push(v2.u);
        vertexUVBufferView.push(v2.v);
        vertexUVBufferView.push(v3.u);
        vertexUVBufferView.push(v3.v);
        if (currentMaterial) {
            // Vertex colors
            switch (currentMaterial.vertexColorMode) {
                case _types__WEBPACK_IMPORTED_MODULE_0__.VertexColorMode.FaceColors:
                    // Just duplicate the face colors 3 times.
                    for (var v = 0; v < 3; v++) {
                        addColorToBufferView(vertexColorBufferView, color || new _types__WEBPACK_IMPORTED_MODULE_0__.RGBColor());
                    }
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_0__.VertexColorMode.VertexColors:
                    addColorToBufferView(vertexColorBufferView, v1.color || new _types__WEBPACK_IMPORTED_MODULE_0__.RGBColor());
                    addColorToBufferView(vertexColorBufferView, v2.color || new _types__WEBPACK_IMPORTED_MODULE_0__.RGBColor());
                    addColorToBufferView(vertexColorBufferView, v3.color || new _types__WEBPACK_IMPORTED_MODULE_0__.RGBColor());
                    break;
                // NoColors? We won't have an accessor.
            }
        }
    });
    if (lastMaterialIndex !== null) {
        var primitive = _completeMeshPrimitive(lastMaterialIndex);
        gltfMesh.primitives.push(primitive);
    }
    vertexBufferView.finalize();
    vertexNormalBufferView === null || vertexNormalBufferView === void 0 ? void 0 : vertexNormalBufferView.finalize();
    vertexUVBufferView.finalize();
    vertexColorBufferView === null || vertexColorBufferView === void 0 ? void 0 : vertexColorBufferView.finalize();
    if (!singleGLBBuffer)
        meshBuffer.finalize();
    return addedIndex;
}
function meshHasVertexNormals(mesh) {
    var hasNormals = false;
    mesh.forEachFace(function (v1) {
        hasNormals = typeof v1.normalX === "number";
        return true;
    });
    return hasNormals;
}
function addColorToBufferView(bufferView, color) {
    bufferView.push((color.r * 255) | 0);
    bufferView.push((color.g * 255) | 0);
    bufferView.push((color.b * 255) | 0);
    if ("a" in color) {
        bufferView.push((color.a * 255) | 0);
    }
    else {
        bufferView.push(0xff);
    }
}
function addBuffer(gltf) {
    return new _buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer(gltf);
}
function addAccessor(gltf, bufferViewIndex, accessorInfo) {
    if (!gltf.accessors)
        gltf.accessors = [];
    var addedIndex = gltf.accessors.length;
    var componentType = accessorInfo.componentType;
    var accessor = {
        bufferView: bufferViewIndex,
        byteOffset: accessorInfo.byteOffset,
        componentType: componentType,
        count: accessorInfo.count,
        type: accessorInfo.type,
        min: accessorInfo.min,
        max: accessorInfo.max,
    };
    if (accessorInfo.normalized) {
        accessor.normalized = true;
    }
    gltf.accessors.push(accessor);
    return addedIndex;
}
function addMaterials(gltf, materials) {
    var indices = [];
    for (var _i = 0, materials_1 = materials; _i < materials_1.length; _i++) {
        var material = materials_1[_i];
        indices.push(addMaterial(gltf, material));
    }
    return indices;
}
function addMaterial(gltf, material) {
    if (!gltf.materials)
        gltf.materials = [];
    var gltfMaterial = {};
    if (material.name)
        gltfMaterial.name = material.name;
    if (material.alphaMode !== _types__WEBPACK_IMPORTED_MODULE_0__.AlphaMode.OPAQUE)
        gltfMaterial.alphaMode = material.alphaMode;
    if (material.alphaCutoff !== 0.5)
        gltfMaterial.alphaCutoff = material.alphaCutoff;
    if (material.doubleSided)
        gltfMaterial.doubleSided = true;
    if (material.pbrMetallicRoughness) {
        if (material.pbrMetallicRoughness.baseColorFactor) {
            gltfMaterial.pbrMetallicRoughness = {};
            gltfMaterial.pbrMetallicRoughness.baseColorFactor =
                material.pbrMetallicRoughness.baseColorFactor;
        }
        if (material.pbrMetallicRoughness.baseColorTexture) {
            if (!gltfMaterial.pbrMetallicRoughness)
                gltfMaterial.pbrMetallicRoughness = {};
            var textureIndex = addTexture(gltf, material.pbrMetallicRoughness.baseColorTexture);
            gltfMaterial.pbrMetallicRoughness.baseColorTexture = {
                index: textureIndex,
            };
        }
        if (material.pbrMetallicRoughness.metallicRoughnessTexture) {
            if (!gltfMaterial.pbrMetallicRoughness)
                gltfMaterial.pbrMetallicRoughness = {};
            var textureRoughnessIndex = addTexture(gltf, material.pbrMetallicRoughness.metallicRoughnessTexture);
            gltfMaterial.pbrMetallicRoughness.metallicRoughnessTexture = {
                index: textureRoughnessIndex,
            };
        }
    }
    var addedIndex = gltf.materials.length;
    gltf.materials.push(gltfMaterial);
    return addedIndex;
}
function addTexture(gltf, texture) {
    if (!gltf.textures)
        gltf.textures = [];
    var gltfTexture = {
        sampler: addSampler(gltf, texture),
        source: addImage(gltf, texture.image),
    };
    var addedIndex = gltf.textures.length;
    gltf.textures.push(gltfTexture);
    return addedIndex;
}
function addImage(gltf, image) {
    if (!gltf.images)
        gltf.images = [];
    for (var i = 0; i < gltf.images.length; i++) {
        if (image === gltf.images[i].extras) {
            return i; // Already had an identical image.
        }
    }
    var gltfImage = {
        extras: image, // For duplicate detection
    };
    var bufferView;
    switch (gltf.extras.options.imageOutputType) {
        case _types__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.GLB:
            bufferView = gltf.extras.binChunkBuffer.addBufferView(_types__WEBPACK_IMPORTED_MODULE_0__.ComponentType.UNSIGNED_BYTE, _types__WEBPACK_IMPORTED_MODULE_0__.DataType.SCALAR);
            bufferView.writeAsync((0,_imageutils__WEBPACK_IMPORTED_MODULE_2__.imageToArrayBuffer)(image)).then(function () {
                bufferView.finalize();
            });
            gltfImage.bufferView = bufferView.getIndex();
            gltfImage.mimeType = "image/png";
            break;
        case _types__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.DataURI:
            gltfImage.uri = (0,_imageutils__WEBPACK_IMPORTED_MODULE_2__.imageToDataURI)(image);
            break;
        default: // ImageOutputType.External
            gltf.extras.promises.push((0,_imageutils__WEBPACK_IMPORTED_MODULE_2__.imageToArrayBuffer)(image).then(function (pngBuffer) {
                gltfImage.uri = pngBuffer; // Processed later
            }));
            break;
    }
    var addedIndex = gltf.images.length;
    gltf.images.push(gltfImage);
    return addedIndex;
}
function addSampler(gltf, texture) {
    if (!gltf.samplers)
        gltf.samplers = [];
    var gltfSampler = {
        wrapS: texture.wrapS,
        wrapT: texture.wrapT,
    };
    for (var i = 0; i < gltf.samplers.length; i++) {
        if (objectsEqual(gltfSampler, gltf.samplers[i])) {
            return i; // Already had an identical sampler.
        }
    }
    var addedIndex = gltf.samplers.length;
    gltf.samplers.push(gltfSampler);
    return addedIndex;
}
function getNodeIndex(gltf, node) {
    if (gltf.extras.nodeIndices.has(node)) {
        return gltf.extras.nodeIndices.get(node);
    }
    return -1;
}
function setNodeIndex(gltf, node, index) {
    gltf.extras.nodeIndices.set(node, index);
}
function objectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGLBBuffer: () => (/* binding */ createGLBBuffer)
/* harmony export */ });
var GLB_HEADER_SIZE = 12;
var GLB_CHUNK_HEADER_SIZE = 8;
var GLB_MAGIC = 0x46546C67;
var GLTF_VERSION = 2;
var GLBChunkType;
(function (GLBChunkType) {
    GLBChunkType[GLBChunkType["JSON"] = 1313821514] = "JSON";
    GLBChunkType[GLBChunkType["BIN"] = 5130562] = "BIN";
})(GLBChunkType || (GLBChunkType = {}));
function createGLBBuffer(json, bin) {
    if (!json)
        throw new Error("GLB requires a JSON glTF chunk");
    var glbLength = GLB_HEADER_SIZE;
    glbLength += GLB_CHUNK_HEADER_SIZE;
    var encodedJSON = textToArrayBuffer(json);
    var jsonChunkSize = makeDivisibleBy(encodedJSON.byteLength, 4);
    glbLength += jsonChunkSize;
    if (bin) {
        glbLength += GLB_CHUNK_HEADER_SIZE;
        glbLength += bin.byteLength; // Already rounded
        if (bin.byteLength % 4)
            throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    }
    var glbBuffer = new ArrayBuffer(glbLength);
    var glbDataView = new DataView(glbBuffer);
    writeHeader(glbDataView, glbLength);
    // Chunk 0 (JSON)
    var offset = writeChunk(glbDataView, encodedJSON, 12, GLBChunkType.JSON, 0x20);
    // Chunk 1 (Binary Buffer)
    if (bin) {
        writeChunk(glbDataView, bin, offset, GLBChunkType.BIN);
    }
    return glbBuffer;
}
function writeHeader(out, glbLength) {
    out.setUint32(0, GLB_MAGIC, true);
    out.setUint32(4, GLTF_VERSION, true);
    out.setUint32(8, glbLength, true);
}
function writeChunk(out, chunk, offset, chunkType, pad) {
    if (pad === void 0) { pad = 0; }
    var chunkLength = makeDivisibleBy(chunk.byteLength, 4);
    out.setUint32(offset, chunkLength, true);
    out.setUint32(offset += 4, chunkType, true);
    writeArrayBuffer(out.buffer, chunk, offset += 4, 0, chunk.byteLength);
    offset += chunk.byteLength;
    while (offset % 4) {
        if (pad) {
            out.setUint8(offset, pad);
        }
        offset++;
    }
    return offset;
}
function textToArrayBuffer(json) {
    return (new TextEncoder()).encode(json).buffer;
}
function writeArrayBuffer(target, src, targetOffset, srcOffset, byteLength) {
    new Uint8Array(target, targetOffset, byteLength).set(new Uint8Array(src, srcOffset, byteLength), 0);
}
function makeDivisibleBy(num, by) {
    return by * Math.ceil(num / by);
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _src_gltf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);




// There is usage of internal types/APIs here. Until this file operates only
// with the public API, I don't think we can refer to it as an ideal example.
function download(content, fileName, contentType) {
    if (contentType === void 0) { contentType = "text/plain"; }
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
function createGLTF() {
    return (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.createEmptyGLTF)();
}
// eslint-disable-next-line
function test1() {
    var asset = new _src_index__WEBPACK_IMPORTED_MODULE_0__.GLTFAsset();
    var scene = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Scene();
    var gltf = createGLTF();
    asset.addScene(scene);
    var x = 1;
    var y = 2;
    var z = 3;
    var node = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node();
    node.setTranslation(x, y, z);
    node.setRotationRadians(x, y, z);
    node.setScale(x, y, z);
    scene.addNode(node);
    (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addScenes)(gltf, asset);
    console.assert(gltf.scenes.length === 1 &&
        gltf.nodes.length === 1 &&
        gltf.scenes[0].nodes[0] === 0);
    var buffer = (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addBuffer)(gltf); // for translation
    var bufferView = buffer.addBufferView(_src_index__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC3); // add translation
    var bufferView2 = buffer.addBufferView(_src_index__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC4); // add quat
    var bufferView3 = buffer.addBufferView(_src_index__WEBPACK_IMPORTED_MODULE_0__.ComponentType.FLOAT, _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.SCALAR);
    console.assert(bufferView.getIndex() === 0 && bufferView2.getIndex() === 1);
    function createAccessor(bufferView, num) {
        if (num === void 0) { num = 1; }
        bufferView.startAccessor();
        num = Math.max(0, num);
        for (var i = 0; i < num; ++i) {
            bufferView.push(i * 3);
            bufferView.push(i * 3 + 1);
            bufferView.push(i * 3 + 2);
        }
        var accessor = bufferView.endAccessor();
        (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addAccessor)(gltf, bufferView.getIndex(), accessor);
    }
    createAccessor(bufferView, 1);
    var acc1 = gltf.accessors[0];
    console.assert(acc1.count === 1 &&
        acc1.max[0] === 0 &&
        acc1.min[0] === 0 &&
        acc1.min[1] === 1);
    createAccessor(bufferView, 2);
    acc1 = gltf.accessors[1];
    console.assert(acc1.count === 2 &&
        acc1.byteOffset === 3 * 4 &&
        acc1.max[0] === 3 &&
        acc1.min[0] === 0);
    function createAnimation() {
        // const animation_sample = [
        //     {
        //         "samplers" : [
        //             {
        //                 "input" : 2,
        //                 "interpolation" : "LINEAR",
        //                 "output" : 3
        //             }
        //         ],
        //         "channels" : [ {
        //             "sampler" : 0,
        //             "target" : {
        //                 "node" : 0,
        //                 "path" : "rotation"
        //             }
        //         } ]
        //     }
        // ]
        var node_idx = 0;
        var myAnimation = {
            channels: [],
            samplers: [],
        };
        var times = [0, 0.2, 0.4, 0.6, 0.8];
        var values = [];
        var num = times.length;
        var interpType = _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR; // samplers
        for (var i = 0; i < num; ++i) {
            values.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4 + 3);
        }
        // create times accessor and values accessor first
        bufferView3.startAccessor();
        for (var _i = 0, times_1 = times; _i < times_1.length; _i++) {
            var t = times_1[_i];
            bufferView3.push(t);
        }
        var accessor = bufferView3.endAccessor();
        var accessor_idx = (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addAccessor)(gltf, bufferView3.getIndex(), accessor);
        bufferView2.startAccessor();
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var v = values_1[_a];
            bufferView2.push(v);
        }
        var accessor2 = bufferView2.endAccessor();
        var accessor2_idx = (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addAccessor)(gltf, bufferView2.getIndex(), accessor2);
        // then create samplers (input: times accessor idx, output: values accessor idx)
        var sampler = {
            input: accessor_idx,
            output: accessor2_idx,
            interpolation: interpType,
        };
        myAnimation.samplers.push(sampler);
        var sampler_idx = myAnimation.samplers.length;
        // then create channels (sampler: get sampler idx from above)
        var channel = {
            sampler: sampler_idx,
            target: {
                node: node_idx,
                path: _src_types__WEBPACK_IMPORTED_MODULE_1__.Transformation.ROTATION,
            },
        };
        myAnimation.channels.push(channel);
        if (!gltf.animations)
            gltf.animations = [];
        gltf.animations.push(myAnimation);
    }
    createAnimation();
    var promises = [];
    bufferView.finalize();
    bufferView2.finalize();
    bufferView3.finalize();
    promises.push(buffer.finalize());
    var bufv1 = gltf.bufferViews[0];
    var buf1 = gltf.buffers[0];
    Promise.all(promises).then(function () {
        console.assert(bufv1.byteLength === 3 * 3 * 4);
        // console.assert(buf1.byteLength === 3 * 3 * 4);
        console.log(gltf);
        console.log(gltf.animations);
        console.log(buf1.uri);
    });
    // console.log(gltf.scenes);
    // console.log(gltf.accessors);
}
function animation_test() {
    var asset = new _src_index__WEBPACK_IMPORTED_MODULE_0__.GLTFAsset();
    var scene = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Scene();
    asset.addScene(scene);
    var gltf = createGLTF();
    var x = 1;
    var y = 2;
    var z = 3;
    var node = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node();
    node.setTranslation(x, y, z);
    node.setRotationRadians(x, y, z);
    node.setScale(x, y, z);
    scene.addNode(node);
    var nodeAnim1 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Animation(_src_types__WEBPACK_IMPORTED_MODULE_1__.Transformation.ROTATION);
    nodeAnim1.keyframes = [
        {
            time: 0,
            value: [1, 2, 3, 4],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.2,
            value: [2, 3, 4, 5],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.4,
            value: [2, 3, 4, 5],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.6,
            value: [1, 2, 3, 4],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.STEP,
        },
    ];
    nodeAnim1.addKeyframe(0.8, [1, 2, 3, 4], _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.STEP);
    console.log(nodeAnim1);
    var nodeAnim2 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Animation(_src_types__WEBPACK_IMPORTED_MODULE_1__.Transformation.TRANSLATION);
    nodeAnim2.keyframes = [
        {
            time: 0,
            value: [1, 2, 3],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.3,
            value: [4, 5, 6],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
    ];
    node.animations = [nodeAnim1, nodeAnim2];
    (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addScenes)(gltf, asset);
    // console.log(gltf.animations)
    // console.log(gltf.accessors);
    //
    var gltfAnim = gltf.animations[0];
    console.assert(gltfAnim.samplers.length === 3);
    console.assert(gltfAnim.channels.length === 3);
    var channel1 = gltfAnim.channels[0]; // path: ROTATION
    var channel2 = gltfAnim.channels[1]; // path: ROTATION
    var channel3 = gltfAnim.channels[2]; // path: TRANSLATION
    var sampler1 = gltfAnim.samplers[0]; // interpolation: LINEAR
    var sampler2 = gltfAnim.samplers[1]; // interpolation: STEP
    var sampler3 = gltfAnim.samplers[2]; // interpolation: LINEAR
    // assert channel targets
    console.assert(channel1.sampler === 0 && channel2.sampler === 1 && channel3.sampler === 2);
    console.assert(channel1.target.path == nodeAnim1.path &&
        channel2.target.path == nodeAnim1.path &&
        channel3.target.path == nodeAnim2.path);
    // assert sampler interpolation types
    console.assert(sampler1.interpolation == nodeAnim1.keyframes[0].interpType &&
        sampler2.interpolation == nodeAnim1.keyframes[3].interpType &&
        sampler3.interpolation == nodeAnim2.keyframes[0].interpType);
    // assert sampler input/output indices
    console.assert(sampler1.input === 0 &&
        sampler1.output === 1 &&
        sampler3.input === 4 &&
        sampler3.output === 5);
    // assert accessors
    var accessors = gltf.accessors;
    console.assert(accessors.length === gltfAnim.samplers.length * 2); // 2 accessors (time, animation) per sampler/channel
    // time bufferviews are the same (index 0)
    console.assert(accessors[0].bufferView === 0 &&
        accessors[2].bufferView === 0 &&
        accessors[4].bufferView === 0 &&
        accessors[0].type === _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.SCALAR &&
        accessors[2].type === _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.SCALAR &&
        accessors[4].type === _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.SCALAR);
    // rotation bufferview
    console.assert(accessors[1].bufferView === 1 &&
        accessors[3].bufferView === 1 &&
        accessors[1].type === _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC4 &&
        accessors[3].type === _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC4);
    // translation bufferview
    console.assert(accessors[5].bufferView === 2 && accessors[5].type === _src_index__WEBPACK_IMPORTED_MODULE_0__.DataType.VEC3);
    console.assert(accessors[5].min[0] === 1 && accessors[5].max[2] === 6);
    {
        var count = accessors[0].count;
        console.assert(count === accessors[1].count && count === 3);
        console.assert(accessors[2].byteOffset === 3 * 4 && accessors[3].byteOffset === 3 * 4 * 4);
        count = accessors[2].count;
        console.assert(count === accessors[3].count && count === 2);
        console.assert(accessors[4].byteOffset === (3 + 2) * 4 && accessors[5].byteOffset === 0);
        count = accessors[4].count;
        console.assert(count === accessors[5].count && count === 2);
    }
    var num_time = 7;
    var num_vec4 = 5;
    var num_vec3 = 2;
    var time_bytes = num_time * 4;
    var vec3_bytes = num_vec3 * 3 * 4;
    var vec4_bytes = num_vec4 * 4 * 4;
    var total_bytes = time_bytes + vec3_bytes + vec4_bytes;
    // assert accessors
    Promise.all(gltf.extras.promises).then(function () {
        var buffer = gltf.buffers[0];
        console.assert(gltf.bufferViews.length === 3);
        var bufferView1 = gltf.bufferViews[0];
        var bufferView2 = gltf.bufferViews[1];
        var bufferView3 = gltf.bufferViews[2];
        console.assert(bufferView1.buffer === 0 &&
            bufferView2.buffer === 0 &&
            bufferView3.buffer === 0);
        console.assert(buffer.byteLength === total_bytes);
        console.assert(bufferView1.byteLength === time_bytes);
        console.assert(bufferView2.byteLength === vec4_bytes);
        console.assert(bufferView3.byteLength === vec3_bytes);
        console.assert(bufferView2.byteOffset === time_bytes);
        console.assert(bufferView3.byteOffset === time_bytes + vec4_bytes);
        // console.log(gltf);
        // console.log(buffer.uri);
        console.log("PASSED");
    });
    // GLTFUtils.exportGLTF(asset, {bufferOutputType: GLTFUtils.BufferOutputType.DataURI}).then((value)=>{
    //     console.log(value["model.gltf"]);
    // })
}
function animation_cubicspline_test() {
    var asset = new _src_index__WEBPACK_IMPORTED_MODULE_0__.GLTFAsset();
    var scene = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Scene();
    asset.addScene(scene);
    var gltf = createGLTF();
    var x = 1;
    var y = 2;
    var z = 3;
    var node = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node();
    node.setTranslation(x, y, z);
    node.setRotationRadians(x, y, z);
    node.setScale(x, y, z);
    scene.addNode(node);
    var nodeAnim1 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Animation(_src_types__WEBPACK_IMPORTED_MODULE_1__.Transformation.TRANSLATION);
    nodeAnim1.keyframes = [
        {
            time: -0.2,
            value: [1, 2, 3],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.STEP,
        },
        {
            time: 0,
            value: [1, 2, 3],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.CUBICSPLINE,
            extras: {
                outTangent: [0.1, 0.1, 0.1],
            },
        },
        {
            time: 0.2,
            value: [4, 5, 6],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.CUBICSPLINE,
            extras: {
                outTangent: [0.2, 0.2, 0.2],
                inTangent: [0.3, 0.3, 0.3],
            },
        },
        {
            time: 0.4,
            value: [7, 8, 9],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.CUBICSPLINE,
            extras: {
                inTangent: [0.5, 0.5, 0.5],
            },
        },
        {
            time: 0.6,
            value: [1, 2, 3],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
    ];
    node.animations = [nodeAnim1];
    (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addScenes)(gltf, asset);
    var accessors = gltf.accessors;
    var time_accessor = accessors[2];
    var anim_accessor = accessors[3];
    //const BV = gltf.bufferViews!;
    //const time_BV = BV[0];
    //const anim_BV = BV[1];
    console.assert(time_accessor.count * 3 === anim_accessor.count);
    Promise.all(gltf.extras.promises).then(function () {
        // console.assert(time_BV.byteLength * 3 * 3 === anim_BV.byteLength);
    });
    console.log(gltf);
}
function skin_test() {
    //const M = new GLTFUtils.Matrix(4);
    var asset = new _src_index__WEBPACK_IMPORTED_MODULE_0__.GLTFAsset();
    var scene = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Scene();
    asset.addScene(scene);
    var node = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node("Root");
    var node2 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node("Skeleton");
    var node3 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node("Pelvis");
    var node4 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node("LeftLeg");
    var node5 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node("RightLeg");
    var xnode = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node("Light");
    xnode.setTranslation(1, 2, 3);
    node.setTranslation(0.1, 0.2, -3);
    node.setRotationDegrees(20, 30, -40);
    node3.setScale(0.8, 0.8, 0.8);
    scene.addNode(node);
    scene.addNode(xnode);
    node.addNode(node2);
    node2.addNode(node3);
    node3.addNode(node4);
    node3.addNode(node5);
    var skin_name = "Skin0";
    node.skin = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Skin(node2, skin_name);
    {
        var gltf = createGLTF();
        (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addScenes)(gltf, asset);
        var joints = gltf.skins[0].joints;
        var nodeIndex = gltf.extras.nodeIndices.get(node);
        var node2Index = gltf.extras.nodeIndices.get(node2);
        console.assert(nodeIndex === 0 && gltf.skins[0].skeleton === node2Index);
        console.assert(joints.length == 4 && joints[0] === node2Index);
    }
    var parentNode = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Node("Parent");
    parentNode.addNode(node);
    scene.removeNode(node); // remove node from scene children, since no longer root
    scene.addNode(parentNode);
    node.skin.skeletonNode = null; // set skeleton root to 'node'
    {
        var gltf = createGLTF();
        (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addScenes)(gltf, asset);
        var joints = gltf.skins[0].joints;
        var nodeIndex = gltf.extras.nodeIndices.get(node);
        console.assert(nodeIndex === 2);
        console.assert(joints.length == 5 && joints[0] === nodeIndex);
    }
    var x = 10;
    var y = 20;
    var z = -30;
    // use row major to store
    node3.inverseBindMatrix = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Matrix4x4(); // add some inverse bind matrices
    node3.inverseBindMatrix.data[0][3] = x; // set x translation
    node3.inverseBindMatrix.data[1][3] = y; // set y translation
    node3.inverseBindMatrix.data[2][3] = z; // set z translation
    // set skeleton root back to node2
    node.skin.skeletonNode = node2;
    {
        var gltf_1 = createGLTF();
        (0,_src_gltf__WEBPACK_IMPORTED_MODULE_2__.addScenes)(gltf_1, asset);
        var joints_1 = gltf_1.skins[0].joints;
        Promise.all(gltf_1.extras.promises).then(function () {
            var buffer = gltf_1.buffers[0];
            var accessor = gltf_1.accessors[0];
            console.assert(gltf_1.skins[0].inverseBindMatrices === 0);
            console.assert(buffer.byteLength === joints_1.length * 4 * 16);
            console.assert(accessor.count === joints_1.length);
            // GLTF stores as column major (index 12 = M03, 13 = M13, 14 = M23)
            console.assert(accessor.max[12] == x &&
                accessor.max[13] == y &&
                accessor.min[14] == z);
            console.log(gltf_1);
        });
    }
    var nodeAnim1 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Animation(_src_types__WEBPACK_IMPORTED_MODULE_1__.Transformation.ROTATION);
    nodeAnim1.keyframes = [
        {
            time: 0,
            value: [1, 2, 3, 4],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.2,
            value: [2, 3, 4, 5],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.4,
            value: [2, 3, 4, 5],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.6,
            value: [1, 2, 3, 4],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.STEP,
        },
    ];
    nodeAnim1.addKeyframe(0.8, [1, 2, 3, 4], _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.STEP);
    var nodeAnim2 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Animation(_src_types__WEBPACK_IMPORTED_MODULE_1__.Transformation.TRANSLATION);
    nodeAnim2.keyframes = [
        {
            time: 0,
            value: [1, 2, 3],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
        {
            time: 0.3,
            value: [4, 5, 6],
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.LINEAR,
        },
    ];
    var nodeAnim3 = new _src_index__WEBPACK_IMPORTED_MODULE_0__.Animation(_src_types__WEBPACK_IMPORTED_MODULE_1__.Transformation.SCALE);
    nodeAnim3.keyframes = [
        {
            time: 0,
            value: [10, 20, 30], // degrees
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.CUBICSPLINE,
        },
        {
            time: 0.3,
            value: [40, 50, 60], // degrees
            interpType: _src_types__WEBPACK_IMPORTED_MODULE_1__.InterpolationMode.CUBICSPLINE,
        },
    ];
    node.animations = [nodeAnim1, nodeAnim2];
    node2.animations = [nodeAnim3];
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {
        bufferOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.DataURI,
    }).then(function (value) {
        var result = value["model.gltf"];
        console.log(result);
        download(result, "model.gltf");
    });
}
function matrix_test() {
    var Matrix = _src_index__WEBPACK_IMPORTED_MODULE_0__.Matrix;
    var rows = 4;
    var M = new Matrix(rows);
    M.data[0][0] = 1;
    console.assert(Matrix.IsIdentity(M));
    M.data[0][0] = 2;
    console.assert(!Matrix.IsIdentity(M));
    M.data[0][0] = 1;
    M.data[0][1] = 0.0001;
    console.assert(!Matrix.IsIdentity(M));
}
matrix_test();
// test1();
animation_test();
animation_cubicspline_test();
skin_test();
// Not executed, ensures API typings work.
// eslint-disable-next-line
function __typingTests() {
    // eslint-disable-line
    var asset = new _src_index__WEBPACK_IMPORTED_MODULE_0__.GLTFAsset();
    var isString = function (x) { return x; };
    var isBuffer = function (x) { return x; };
    var isEither = function (x) { return x; };
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset).then(function (value) {
        isString(value["model.gltf"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {}).then(function (value) {
        isString(value["model.gltf"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, { jsonSpacing: 2 }).then(function (value) {
        isString(value["model.gltf"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {
        bufferOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.DataURI,
        imageOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.DataURI,
    }).then(function (value) {
        isString(value["model.gltf"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {
        bufferOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.DataURI,
        imageOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.DataURI,
        jsonSpacing: 2,
    }).then(function (value) {
        isString(value["model.gltf"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {
        bufferOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.External,
        imageOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.External,
        jsonSpacing: 2,
    }).then(function (value) {
        isString(value["model.gltf"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {
        bufferOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.GLB,
    }).then(function (value) {
        isBuffer(value["model.glb"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {
        imageOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.GLB,
    }).then(function (value) {
        isBuffer(value["model.glb"]);
        isEither(value["something"]);
    });
    _src_index__WEBPACK_IMPORTED_MODULE_0__.exportGLTF(asset, {
        bufferOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.BufferOutputType.GLB,
        imageOutputType: _src_index__WEBPACK_IMPORTED_MODULE_0__.ImageOutputType.GLB,
    }).then(function (value) {
        isBuffer(value["model.glb"]);
        isEither(value["something"]);
    });
}

})();

/******/ })()
;