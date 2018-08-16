(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GLTFUtils"] = factory();
	else
		root["GLTFUtils"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MeshMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WrappingMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RGBColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RGBAColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return VertexColorMode; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLTFAsset; });
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
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



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(4);

var Node = /** @class */ (function () {
    function Node() {
        this.name = "";
        this._nodes = [];
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
        this._translation = new __WEBPACK_IMPORTED_MODULE_0__math__["b" /* XYZPair */](x, y, z);
    };
    Node.prototype.getTranslation = function () {
        return this._translation || new __WEBPACK_IMPORTED_MODULE_0__math__["b" /* XYZPair */](0, 0, 0);
    };
    Node.prototype.setRotationDegrees = function (x, y, z) {
        this.setRotationRadians(Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* degreesToRadians */])(x), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* degreesToRadians */])(y), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* degreesToRadians */])(z));
    };
    Node.prototype.setRotationRadians = function (x, y, z) {
        this._rotation = Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* toQuaternion */])(x, y, z);
    };
    Node.prototype.setRotationQuaternion = function (x, y, z, w) {
        this._rotation = new __WEBPACK_IMPORTED_MODULE_0__math__["a" /* Quaternion */](x, y, z, w);
    };
    Node.prototype.getRotationQuaternion = function () {
        return this._rotation || new __WEBPACK_IMPORTED_MODULE_0__math__["a" /* Quaternion */](0, 0, 0, 1);
    };
    Node.prototype.setScale = function (x, y, z) {
        this._scale = new __WEBPACK_IMPORTED_MODULE_0__math__["b" /* XYZPair */](x, y, z);
    };
    Node.prototype.getScale = function () {
        return this._scale || new __WEBPACK_IMPORTED_MODULE_0__math__["b" /* XYZPair */](1, 1, 1);
    };
    return Node;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return XYZPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quaternion; });
/* harmony export (immutable) */ __webpack_exports__["d"] = toQuaternion;
/* harmony export (immutable) */ __webpack_exports__["c"] = degreesToRadians;
var XYZPair = /** @class */ (function () {
    function XYZPair(x, y, z) {
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


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesh; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);

var Mesh = /** @class */ (function () {
    function Mesh() {
        this.material = [];
        this.mode = __WEBPACK_IMPORTED_MODULE_0__types__["d" /* MeshMode */].TRIANGLES;
        this._vertices = [];
        this._faceColors = [];
        this._materialIndices = [];
    }
    Mesh.prototype.addFace = function (v1, v2, v3, color, materialIndex) {
        this._vertices.push(v1);
        this._vertices.push(v2);
        this._vertices.push(v3);
        this._faceColors.push(color);
        this._materialIndices.push(materialIndex);
    };
    Mesh.prototype.forEachFace = function (fn) {
        for (var i = 0; i < this._vertices.length / 3; i++) {
            fn(this._vertices[(i * 3)], this._vertices[(i * 3) + 1], this._vertices[(i * 3) + 2], this._faceColors[i], this._materialIndices[i]);
        }
    };
    return Mesh;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);

var Material = /** @class */ (function () {
    function Material() {
        this.name = "";
        this.alphaCutoff = 0.5;
        this.alphaMode = __WEBPACK_IMPORTED_MODULE_0__types__["a" /* AlphaMode */].OPAQUE;
        this.doubleSided = false;
        this.vertexColorMode = __WEBPACK_IMPORTED_MODULE_0__types__["g" /* VertexColorMode */].NoColors;
        this.pbrMetallicRoughness = {
            metallicFactor: 1.0,
            roughnessFactor: 1.0,
        };
    }
    return Material;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Texture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);

var Texture = /** @class */ (function () {
    function Texture() {
        this.wrapS = __WEBPACK_IMPORTED_MODULE_0__types__["h" /* WrappingMode */].CLAMP_TO_EDGE;
        this.wrapT = __WEBPACK_IMPORTED_MODULE_0__types__["h" /* WrappingMode */].CLAMP_TO_EDGE;
    }
    return Texture;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vertex; });
var Vertex = /** @class */ (function () {
    function Vertex() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.u = 0;
        this.v = 0;
        this.normalX = 0;
        this.normalY = 0;
        this.normalZ = 0;
    }
    return Vertex;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferOutputType", function() { return BufferOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageOutputType", function() { return ImageOutputType; });
/* harmony export (immutable) */ __webpack_exports__["exportGLTF"] = exportGLTF;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asset__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFAsset", function() { return __WEBPACK_IMPORTED_MODULE_0__asset__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return __WEBPACK_IMPORTED_MODULE_1__scene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return __WEBPACK_IMPORTED_MODULE_2__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesh__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return __WEBPACK_IMPORTED_MODULE_3__mesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return __WEBPACK_IMPORTED_MODULE_4__material__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__texture__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return __WEBPACK_IMPORTED_MODULE_5__texture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vertex__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vertex", function() { return __WEBPACK_IMPORTED_MODULE_6__vertex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "XYZPair", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Quaternion", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__threejs__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "glTFAssetFromTHREE", function() { return __WEBPACK_IMPORTED_MODULE_8__threejs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaMode", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentType", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MeshMode", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RGBColor", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RGBAColor", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VertexColorMode", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "WrappingMode", function() { return __WEBPACK_IMPORTED_MODULE_9__types__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__buffer__ = __webpack_require__(11);












var BufferOutputType;
(function (BufferOutputType) {
    /** Create separate files for binary buffers (default) */
    BufferOutputType[BufferOutputType["External"] = 0] = "External";
    /** Embed buffers as data URIs. */
    BufferOutputType[BufferOutputType["DataURI"] = 1] = "DataURI";
})(BufferOutputType || (BufferOutputType = {}));
var ImageOutputType;
(function (ImageOutputType) {
    /** Create separate files for images (default) */
    ImageOutputType[ImageOutputType["External"] = 0] = "External";
    /** Embed images as data URIs. */
    ImageOutputType[ImageOutputType["DataURI"] = 1] = "DataURI";
})(ImageOutputType || (ImageOutputType = {}));
/**
 * Creates a glTF model from a GLTFAsset structure.
 * @param asset GLTFAsset model structure
 * @param options
 * @returns An object, each key pointing to a file.
 * If options includes a JSZip reference, the a Promise to receive a ZIP blob
 * is returned instead.
 */
function exportGLTF(asset, options) {
    options = options || {};
    var gltf = {
        asset: {
            version: "2.0",
            copyright: asset.copyright,
            generator: asset.generator,
        },
    };
    addScenes(gltf, asset);
    var currentData = 1;
    var currentImg = 1;
    var output = {};
    var jsonSpacing = options.hasOwnProperty("jsonSpacing") ? options.jsonSpacing : 4;
    var gltfString = JSON.stringify(gltf, function (key, value) {
        if (value instanceof ArrayBuffer) {
            if (options.bufferOutputType === BufferOutputType.DataURI) {
                return encodeBase64DataUri(value);
            }
            else { // BufferOutputType.External
                var filename = "data" + currentData + ".bin";
                currentData++;
                output[filename] = value;
                return filename;
            }
        }
        if (value instanceof HTMLImageElement || value instanceof HTMLCanvasElement) {
            if (options.imageOutputType === ImageOutputType.DataURI) {
                return imageToDataURI(value);
            }
            else { // ImageOutputType.External
                var filename = "img" + currentImg + ".png";
                currentImg++;
                output[filename] = imageToDataURI(value);
                // Strip off data uri schema
                output[filename] = output[filename].substr(output[filename].indexOf(",") + 1);
                return filename;
            }
        }
        return value;
    }, jsonSpacing);
    var modelName = "model.gltf";
    output[modelName] = gltfString;
    if (options.jsZip) {
        var zip = new options.jsZip();
        for (var filename in output) {
            if (filename !== modelName && typeof output[filename] === "string") { // An image
                zip.file(filename, output[filename], { base64: true });
            }
            else {
                zip.file(filename, output[filename]);
            }
        }
        return zip.generateAsync({ type: "blob" });
    }
    return output;
}
function addScenes(gltf, asset) {
    gltf.scene = asset.defaultScene;
    asset.forEachScene(function (scene) {
        addScene(gltf, scene);
    });
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
    if (!gltf.nodes)
        gltf.nodes = [];
    var gltfNode = {};
    if (node.name)
        gltfNode.name = node.name;
    var translation = node.getTranslation();
    if (translation.x !== 0 || translation.y !== 0 || translation.z !== 0)
        gltfNode.translation = translation.toArray();
    var rotation = node.getRotationQuaternion();
    if (rotation.x !== 0 || rotation.y !== 0 || rotation.z !== 0 || rotation.w !== 1)
        gltfNode.rotation = rotation.toArray();
    var scale = node.getScale();
    if (scale.x !== 1 || scale.y !== 1 || scale.z !== 1)
        gltfNode.scale = scale.toArray();
    var addedIndex = gltf.nodes.length;
    gltf.nodes.push(gltfNode);
    if (node.mesh) {
        gltfNode.mesh = addMesh(gltf, node.mesh);
    }
    else {
        node.forEachNode(function (node) {
            if (!gltfNode.children)
                gltfNode.children = [];
            var index = addNode(gltf, node);
            gltfNode.children.push(index);
        });
    }
    return addedIndex;
}
function addMesh(gltf, mesh) {
    if (!gltf.meshes)
        gltf.meshes = [];
    if (mesh.mode !== __WEBPACK_IMPORTED_MODULE_9__types__["d" /* MeshMode */].TRIANGLES)
        throw "MeshMode other than TRIANGLES not currently supported";
    addMaterials(gltf, mesh.material);
    var gltfMesh = {
        primitives: [],
    };
    var addedIndex = gltf.meshes.length;
    gltf.meshes.push(gltfMesh);
    var meshBuffer = new __WEBPACK_IMPORTED_MODULE_10__buffer__["a" /* Buffer */]();
    var meshBufferIndex = addBuffer(gltf, meshBuffer);
    var vertexBufferView = meshBuffer.addBufferView(__WEBPACK_IMPORTED_MODULE_9__types__["b" /* ComponentType */].FLOAT, __WEBPACK_IMPORTED_MODULE_9__types__["c" /* DataType */].VEC3);
    var vertexBufferIndex = addBufferView(gltf, vertexBufferView, meshBufferIndex);
    var vertexNormalBufferView = meshBuffer.addBufferView(__WEBPACK_IMPORTED_MODULE_9__types__["b" /* ComponentType */].FLOAT, __WEBPACK_IMPORTED_MODULE_9__types__["c" /* DataType */].VEC3);
    var vertexNormalBufferIndex = addBufferView(gltf, vertexNormalBufferView, meshBufferIndex);
    var vertexUVBufferView = meshBuffer.addBufferView(__WEBPACK_IMPORTED_MODULE_9__types__["b" /* ComponentType */].FLOAT, __WEBPACK_IMPORTED_MODULE_9__types__["c" /* DataType */].VEC2);
    var vertexUVBufferIndex = addBufferView(gltf, vertexUVBufferView, meshBufferIndex);
    var vertexColorBufferView = meshBuffer.addBufferView(__WEBPACK_IMPORTED_MODULE_9__types__["b" /* ComponentType */].UNSIGNED_BYTE, __WEBPACK_IMPORTED_MODULE_9__types__["c" /* DataType */].VEC3);
    var vertexColorBufferIndex = addBufferView(gltf, vertexColorBufferView, meshBufferIndex);
    var lastMaterial;
    var lastMaterialIndex = null;
    mesh.forEachFace(function (v1, v2, v3, color, materialIndex) {
        var currentMaterial = mesh.material[materialIndex];
        lastMaterial = mesh.material[lastMaterialIndex];
        // Need to start new accessors
        if (lastMaterialIndex !== materialIndex) {
            // And end the previous ones.
            if (lastMaterialIndex !== null) {
                var vertexBufferAccessorInfo = vertexBufferView.endAccessor();
                var vertexNormalBufferAccessorInfo = vertexNormalBufferView.endAccessor();
                var vertexUVBufferAccessorInfo = vertexUVBufferView.endAccessor();
                var primitive = {
                    attributes: {
                        POSITION: addAccessor(gltf, vertexBufferIndex, vertexBufferAccessorInfo),
                        NORMAL: addAccessor(gltf, vertexNormalBufferIndex, vertexNormalBufferAccessorInfo),
                        TEXCOORD_0: addAccessor(gltf, vertexUVBufferIndex, vertexUVBufferAccessorInfo),
                    },
                    material: lastMaterialIndex,
                    mode: mesh.mode,
                };
                // Only add color data if it is per-face/vertex.
                if (lastMaterial.vertexColorMode !== __WEBPACK_IMPORTED_MODULE_9__types__["g" /* VertexColorMode */].NoColors) {
                    var vertexColorBufferAccessorInfo = vertexColorBufferView.endAccessor();
                    primitive.attributes["COLOR_0"] =
                        addAccessor(gltf, vertexColorBufferIndex, vertexColorBufferAccessorInfo);
                }
                gltfMesh.primitives.push(primitive);
            }
            vertexBufferView.startAccessor();
            vertexNormalBufferView.startAccessor();
            vertexUVBufferView.startAccessor();
            if (currentMaterial.vertexColorMode !== __WEBPACK_IMPORTED_MODULE_9__types__["g" /* VertexColorMode */].NoColors)
                vertexColorBufferView.startAccessor();
            lastMaterialIndex = materialIndex;
            lastMaterial = mesh.material[lastMaterialIndex];
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
        vertexNormalBufferView.push(v1.normalX);
        vertexNormalBufferView.push(v1.normalY);
        vertexNormalBufferView.push(v1.normalZ);
        vertexNormalBufferView.push(v2.normalX);
        vertexNormalBufferView.push(v2.normalY);
        vertexNormalBufferView.push(v2.normalZ);
        vertexNormalBufferView.push(v3.normalX);
        vertexNormalBufferView.push(v3.normalY);
        vertexNormalBufferView.push(v3.normalZ);
        // Texture UV coords
        vertexUVBufferView.push(v1.u);
        vertexUVBufferView.push(v1.v);
        vertexUVBufferView.push(v2.u);
        vertexUVBufferView.push(v2.v);
        vertexUVBufferView.push(v3.u);
        vertexUVBufferView.push(v3.v);
        // Vertex colors
        switch (currentMaterial.vertexColorMode) {
            case __WEBPACK_IMPORTED_MODULE_9__types__["g" /* VertexColorMode */].FaceColors:
                // Just duplicate the face colors 3 times.
                for (var v = 0; v < 3; v++) {
                    addColorToBufferView(vertexColorBufferView, color || new __WEBPACK_IMPORTED_MODULE_9__types__["f" /* RGBColor */]());
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_9__types__["g" /* VertexColorMode */].VertexColors:
                addColorToBufferView(vertexColorBufferView, v1.color || new __WEBPACK_IMPORTED_MODULE_9__types__["f" /* RGBColor */]());
                addColorToBufferView(vertexColorBufferView, v2.color || new __WEBPACK_IMPORTED_MODULE_9__types__["f" /* RGBColor */]());
                addColorToBufferView(vertexColorBufferView, v3.color || new __WEBPACK_IMPORTED_MODULE_9__types__["f" /* RGBColor */]());
                break;
            // NoColors? We won't have an accessor.
        }
    });
    if (lastMaterialIndex !== null) {
        var vertexBufferAccessorInfo = vertexBufferView.endAccessor();
        var vertexNormalBufferAccessorInfo = vertexNormalBufferView.endAccessor();
        var vertexUVBufferAccessorInfo = vertexUVBufferView.endAccessor();
        var primitive = {
            attributes: {
                POSITION: addAccessor(gltf, vertexBufferIndex, vertexBufferAccessorInfo),
                NORMAL: addAccessor(gltf, vertexNormalBufferIndex, vertexNormalBufferAccessorInfo),
                TEXCOORD_0: addAccessor(gltf, vertexUVBufferIndex, vertexUVBufferAccessorInfo),
            },
            material: lastMaterialIndex,
            mode: mesh.mode,
        };
        // Only add color data if it is per-face/vertex.
        if (lastMaterial.vertexColorMode !== __WEBPACK_IMPORTED_MODULE_9__types__["g" /* VertexColorMode */].NoColors) {
            var vertexColorBufferAccessorInfo = vertexColorBufferView.endAccessor();
            primitive.attributes["COLOR_0"] =
                addAccessor(gltf, vertexColorBufferIndex, vertexColorBufferAccessorInfo);
        }
        gltfMesh.primitives.push(primitive);
    }
    finalizeBuffer(gltf, meshBufferIndex);
    finalizeBufferView(gltf, vertexBufferIndex);
    finalizeBufferView(gltf, vertexNormalBufferIndex);
    finalizeBufferView(gltf, vertexUVBufferIndex);
    finalizeBufferView(gltf, vertexColorBufferIndex);
    return addedIndex;
}
function addColorToBufferView(bufferView, color) {
    bufferView.push((color.r * 255) | 0);
    bufferView.push((color.g * 255) | 0);
    bufferView.push((color.b * 255) | 0);
    // if (color instanceof RGBAColor) {
    //   bufferView.push((color.a * 255) | 0);
    // }
    // else {
    //   bufferView.push(0xFF);
    // }
}
function addBuffer(gltf, buffer) {
    if (!gltf.buffers)
        gltf.buffers = [];
    var addedIndex = gltf.buffers.length;
    gltf.buffers.push({
        byteLength: -1,
        extras: buffer,
    });
    return addedIndex;
}
function finalizeBuffer(gltf, bufferIndex) {
    var gltfBuffer = gltf.buffers[bufferIndex];
    var buffer = gltfBuffer.extras;
    var arrayBuffer = buffer.getArrayBuffer();
    gltfBuffer.byteLength = arrayBuffer.byteLength;
    gltfBuffer.uri = arrayBuffer; // Still not totally finalized, see stringify
    delete gltfBuffer.extras;
}
function addBufferView(gltf, bufferView, bufferIndex) {
    if (!gltf.bufferViews)
        gltf.bufferViews = [];
    var addedIndex = gltf.bufferViews.length;
    gltf.bufferViews.push({
        buffer: bufferIndex,
        byteLength: -1,
        extras: bufferView,
    });
    return addedIndex;
}
function finalizeBufferView(gltf, bufferViewIndex) {
    var gltfBufferView = gltf.bufferViews[bufferViewIndex];
    var bufferView = gltfBufferView.extras;
    gltfBufferView.byteOffset = bufferView.getByteOffset();
    gltfBufferView.byteLength = bufferView.getSize();
    delete gltfBufferView.extras;
}
function addAccessor(gltf, bufferViewIndex, accessorInfo) {
    if (!gltf.accessors)
        gltf.accessors = [];
    var addedIndex = gltf.accessors.length;
    gltf.accessors.push({
        bufferView: bufferViewIndex,
        byteOffset: accessorInfo.byteOffset,
        componentType: accessorInfo.componentType,
        count: accessorInfo.count,
        type: accessorInfo.type,
    });
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
    if (material.alphaMode !== __WEBPACK_IMPORTED_MODULE_9__types__["a" /* AlphaMode */].OPAQUE)
        gltfMaterial.alphaMode = material.alphaMode;
    if (material.alphaCutoff !== 0.5)
        gltfMaterial.alphaCutoff = material.alphaCutoff;
    if (material.doubleSided)
        gltfMaterial.doubleSided = true;
    if (material.pbrMetallicRoughness) {
        if (material.pbrMetallicRoughness.baseColorFactor) {
            ensure(gltfMaterial, "pbrMetallicRoughness", {});
            gltfMaterial.pbrMetallicRoughness.baseColorFactor = material.pbrMetallicRoughness.baseColorFactor;
        }
        if (material.pbrMetallicRoughness.baseColorTexture) {
            ensure(gltfMaterial, "pbrMetallicRoughness", {});
            var textureIndex = addTexture(gltf, material.pbrMetallicRoughness.baseColorTexture);
            gltfMaterial.pbrMetallicRoughness.baseColorTexture = { index: textureIndex };
        }
    }
    var addedIndex = gltf.materials.length;
    gltf.materials.push(gltfMaterial);
    return addedIndex;
}
function ensure(obj, prop, defaultValue) {
    obj[prop] = obj[prop] || defaultValue;
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
    var gltfImage = {};
    gltfImage.uri = image; // Processed later
    for (var i = 0; i < gltf.images.length; i++) {
        if (image === gltf.images[i].uri) {
            return i; // Already had an identical image.
        }
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
function imageToDataURI(image) {
    var canvas;
    if (image instanceof HTMLImageElement) {
        canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
    }
    else {
        canvas = image;
    }
    return canvas.toDataURL();
}
function encodeBase64DataUri(buf) {
    var codes = [];
    var uint8arr = new Uint8Array(buf);
    for (var i = 0; i < uint8arr.length; i++) {
        codes.push(String.fromCharCode(uint8arr[i]));
    }
    var b64 = btoa(codes.join(""));
    var uri = "data:application/octet-stream;base64," + b64;
    return uri;
}
function objectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = glTFAssetFromTHREE;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asset__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesh__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__texture__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vertex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__(0);








function glTFAssetFromTHREE(obj) {
    var asset = new __WEBPACK_IMPORTED_MODULE_0__asset__["a" /* GLTFAsset */]();
    var scene = new __WEBPACK_IMPORTED_MODULE_1__scene__["a" /* Scene */]();
    scene.name = obj.name;
    asset.addScene(scene);
    scene.addNode(NodeFromTHREE(obj));
    return asset;
}
function NodeFromTHREE(obj) {
    var node = new __WEBPACK_IMPORTED_MODULE_2__node__["a" /* Node */]();
    node.name = obj.name;
    if (isTHREEMesh(obj)) {
        node.mesh = MeshFromTHREE(obj);
    }
    else {
        node.setTranslation(obj.position.x, obj.position.y, obj.position.z);
        node.setRotationRadians(obj.rotation.x, obj.rotation.y, obj.rotation.z);
        node.setScale(obj.scale.x, obj.scale.y, obj.scale.z);
        for (var _i = 0, _a = obj.children; _i < _a.length; _i++) {
            var child = _a[_i];
            node.addNode(NodeFromTHREE(child));
        }
    }
    return node;
}
function MeshFromTHREE(obj) {
    var mesh = new __WEBPACK_IMPORTED_MODULE_3__mesh__["a" /* Mesh */]();
    var threeGeometry = obj.geometry;
    if (isTHREEGeometry(threeGeometry)) {
        for (var i = 0; i < threeGeometry.faces.length; i++) {
            var face = threeGeometry.faces[i];
            var faceColor = new __WEBPACK_IMPORTED_MODULE_7__types__["f" /* RGBColor */]();
            faceColor.r = face.color.r;
            faceColor.g = face.color.g;
            faceColor.b = face.color.b;
            mesh.addFace(VertexFromTHREE(threeGeometry, i, face.a, 0), VertexFromTHREE(threeGeometry, i, face.b, 1), VertexFromTHREE(threeGeometry, i, face.c, 2), faceColor, face.materialIndex);
        }
        mesh.material = MaterialsFromTHREE(obj.material);
    }
    else {
        throw new Error("BufferGeometry (or other type) not supported.");
    }
    return mesh;
}
function MaterialsFromTHREE(threeMaterial) {
    var materials = [];
    if (!Array.isArray(threeMaterial)) {
        threeMaterial = [threeMaterial];
    }
    for (var _i = 0, threeMaterial_1 = threeMaterial; _i < threeMaterial_1.length; _i++) {
        var mat = threeMaterial_1[_i];
        materials.push(MaterialFromTHREE(mat));
    }
    return materials;
}
function MaterialFromTHREE(threeMaterial) {
    var material = new __WEBPACK_IMPORTED_MODULE_4__material__["a" /* Material */]();
    material.doubleSided = threeMaterial.side === 2; // THREE.DoubleSide;
    if (isTHREEMeshBasicMaterial(threeMaterial)) {
        material.pbrMetallicRoughness.metallicFactor = 0;
        material.pbrMetallicRoughness.roughnessFactor = 0;
        if (threeMaterial.transparent) {
            material.alphaMode = __WEBPACK_IMPORTED_MODULE_7__types__["a" /* AlphaMode */].MASK;
            material.alphaCutoff = threeMaterial.alphaTest;
        }
        material.vertexColorMode = threeMaterial.vertexColors;
        if (threeMaterial.color && threeMaterial.vertexColors === 0 /* THREE.NoColors */) {
            material.pbrMetallicRoughness.baseColorFactor = [
                threeMaterial.color.r,
                threeMaterial.color.g,
                threeMaterial.color.b,
                1
            ];
        }
        if (threeMaterial.map) {
            var texture = new __WEBPACK_IMPORTED_MODULE_5__texture__["a" /* Texture */]();
            texture.image = threeMaterial.map.image;
            texture.wrapS = WrappingModeFromTHREE(threeMaterial.map.wrapS);
            texture.wrapT = WrappingModeFromTHREE(threeMaterial.map.wrapT);
            material.pbrMetallicRoughness.baseColorTexture = texture;
        }
    }
    else {
        throw new Error(threeMaterial.type + " is currently not supported.");
    }
    return material;
}
function VertexFromTHREE(threeGeometry, faceIndex, vertexIndex, vertexRelIndex) {
    var vertex = new __WEBPACK_IMPORTED_MODULE_6__vertex__["a" /* Vertex */]();
    var threeVertex = threeGeometry.vertices[vertexIndex];
    vertex.x = threeVertex.x;
    vertex.y = threeVertex.y;
    vertex.z = threeVertex.z;
    if (threeGeometry.faceVertexUvs[0] && threeGeometry.faceVertexUvs[0][faceIndex]
        && threeGeometry.faceVertexUvs[0][faceIndex][vertexRelIndex]) {
        vertex.u = threeGeometry.faceVertexUvs[0][faceIndex][vertexRelIndex].x;
        vertex.v = threeGeometry.faceVertexUvs[0][faceIndex][vertexRelIndex].y;
    }
    var threeFace = threeGeometry.faces[faceIndex];
    if (threeFace.vertexNormals[vertexRelIndex]) {
        vertex.normalX = threeFace.vertexNormals[vertexRelIndex].x;
        vertex.normalY = threeFace.vertexNormals[vertexRelIndex].y;
        vertex.normalZ = threeFace.vertexNormals[vertexRelIndex].z;
    }
    if (threeFace.vertexColors[vertexRelIndex]) {
        vertex.color = new __WEBPACK_IMPORTED_MODULE_7__types__["f" /* RGBColor */]();
        vertex.color.r = threeFace.vertexColors[vertexRelIndex].r;
        vertex.color.g = threeFace.vertexColors[vertexRelIndex].g;
        vertex.color.b = threeFace.vertexColors[vertexRelIndex].b;
    }
    return vertex;
}
function WrappingModeFromTHREE(mode) {
    switch (mode) {
        case 1000: // THREE.RepeatWrapping
            return __WEBPACK_IMPORTED_MODULE_7__types__["h" /* WrappingMode */].REPEAT;
        case 1002: // THREE.MirroredRepeatWrapping
            return __WEBPACK_IMPORTED_MODULE_7__types__["h" /* WrappingMode */].MIRRORED_REPEAT;
        case 1001: // THREE.ClampToEdgeWrapping
        default:
            return __WEBPACK_IMPORTED_MODULE_7__types__["h" /* WrappingMode */].CLAMP_TO_EDGE;
    }
}
function isTHREEMesh(obj) {
    return obj.type === "Mesh";
}
function isTHREEGeometry(obj) {
    return obj.type === "Geometry";
}
function isTHREEMeshBasicMaterial(obj) {
    return obj.type === "MeshBasicMaterial";
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buffer; });
/* unused harmony export BufferView */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(0);

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
            bufferView.write(buffer, currentIndex);
            currentIndex += bufferView.getSize();
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
        var numComponentsForDataType = this._numComponentsForDataType();
        var numElements = (this._data.length - this._accessorIndex) / numComponentsForDataType;
        if (numElements % 1)
            throw "An accessor was ended with missing component values";
        var info = {
            byteOffset: elementSize * (this._accessorIndex / numComponentsForDataType),
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
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].BYTE:
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].UNSIGNED_BYTE:
                return 1;
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].SHORT:
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].UNSIGNED_SHORT:
                return 2;
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].UNSIGNED_INT:
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].FLOAT:
                return 4;
        }
        throw "Unrecognized component type " + this._componentType;
    };
    BufferView.prototype._numComponentsForDataType = function () {
        switch (this._dataType) {
            case __WEBPACK_IMPORTED_MODULE_0__types__["c" /* DataType */].SCALAR:
                return 1;
            case __WEBPACK_IMPORTED_MODULE_0__types__["c" /* DataType */].VEC2:
                return 2;
            case __WEBPACK_IMPORTED_MODULE_0__types__["c" /* DataType */].VEC3:
                return 3;
            case __WEBPACK_IMPORTED_MODULE_0__types__["c" /* DataType */].VEC4:
            case __WEBPACK_IMPORTED_MODULE_0__types__["c" /* DataType */].MAT2:
                return 4;
            case __WEBPACK_IMPORTED_MODULE_0__types__["c" /* DataType */].MAT3:
                return 9;
            case __WEBPACK_IMPORTED_MODULE_0__types__["c" /* DataType */].MAT4:
                return 16;
        }
        throw "Unsupported data type";
    };
    BufferView.prototype._writeValue = function (dataView, index, val) {
        switch (this._componentType) {
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].BYTE:
                dataView.setInt8(index, val);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].UNSIGNED_BYTE:
                dataView.setUint8(index, val);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].SHORT:
                dataView.setInt16(index, val, true);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].UNSIGNED_SHORT:
                dataView.setUint16(index, val, true);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].UNSIGNED_INT:
                dataView.setUint32(index, val, true);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__types__["b" /* ComponentType */].FLOAT:
                dataView.setFloat32(index, val, true);
                break;
            default:
                throw "Unsupported data type";
        }
    };
    return BufferView;
}());



/***/ })
/******/ ]);
});