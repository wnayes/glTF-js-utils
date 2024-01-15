declare module "src/types" {
    export enum BufferOutputType {
        /** Create separate files for binary buffers (default) */
        External = 0,
        /** Embed buffers as data URIs. */
        DataURI = 1,
        /**
         * Embed buffers as chunks in a GLB buffer.
         */
        GLB = 2
    }
    export enum ImageOutputType {
        /** Create separate files for images (default) */
        External = 0,
        /** Embed images as data URIs. */
        DataURI = 1,
        /**
         * Embed images as chunks in a GLB buffer.
         */
        GLB = 2
    }
    export enum ComponentType {
        BYTE = 5120,
        UNSIGNED_BYTE = 5121,
        SHORT = 5122,
        UNSIGNED_SHORT = 5123,
        UNSIGNED_INT = 5125,
        FLOAT = 5126
    }
    export enum DataType {
        SCALAR = "SCALAR",
        VEC2 = "VEC2",
        VEC3 = "VEC3",
        VEC4 = "VEC4",
        MAT2 = "MAT2",
        MAT3 = "MAT3",
        MAT4 = "MAT4"
    }
    export enum MeshMode {
        POINTS = 0,
        LINES = 1,
        LINE_LOOP = 2,
        LINE_STRIP = 3,
        TRIANGLES = 4,
        TRIANGLE_STRIP = 5,
        TRIANGLE_FAN = 6
    }
    export enum WrappingMode {
        CLAMP_TO_EDGE = 33071,
        MIRRORED_REPEAT = 33648,
        REPEAT = 10497
    }
    export enum AlphaMode {
        OPAQUE = "OPAQUE",
        MASK = "MASK",
        BLEND = "BLEND"
    }
    export class RGBColor {
        /** Red, between 0 and 1. */
        r: number;
        /** Green, between 0 and 1 */
        g: number;
        /** Blue, between 0 and 1 */
        b: number;
    }
    export class RGBAColor extends RGBColor {
        /** Alpha, between 0 and 1 */
        a: number;
    }
    export enum VertexColorMode {
        NoColors = 0,
        FaceColors = 1,
        VertexColors = 2
    }
    export enum InterpolationMode {
        LINEAR = "LINEAR",
        STEP = "STEP",
        CUBICSPLINE = "CUBICSPLINE"
    }
    export enum Transformation {
        TRANSLATION = "translation",
        ROTATION = "rotation",
        SCALE = "scale"
    }
}
declare module "src/animation" {
    import { InterpolationMode, Transformation } from "src/types";
    export interface KeyframeExtras {
        outTangent?: [number, number, number];
        outTangentWeight?: [number, number, number];
        inTangent?: [number, number, number];
        inTangentWeight?: [number, number, number];
    }
    export interface Keyframe {
        time: number;
        value: number[];
        interpType: InterpolationMode;
        extras?: KeyframeExtras;
    }
    export class Animation {
        keyframes: Keyframe[];
        path: Transformation;
        name: string;
        constructor(path: Transformation, name?: string);
        addKeyframe(time: number, value: number[], interpType: InterpolationMode, extras?: KeyframeExtras): void;
    }
}
declare module "src/math" {
    export class Vector3 {
        constructor(x: number, y: number, z: number);
        x: number;
        y: number;
        z: number;
        toArray(): [number, number, number];
    }
    export class Quaternion {
        constructor(x: number, y: number, z: number, w: number);
        x: number;
        y: number;
        z: number;
        w: number;
        toArray(): [number, number, number, number];
    }
    export function toQuaternion(x: number, y: number, z: number): Quaternion;
    export function degreesToRadians(degrees: number): number;
    export class Matrix {
        data: number[][];
        constructor(rows?: number);
        /**
         * Return the matrix values
         */
        get m(): number[][];
        get rows(): number;
        get cols(): number;
        /**
         * Initialize an identity square matrix
         */
        static Identity(rows: number): number[][];
        static IsIdentity(matrix: Matrix): boolean;
    }
    export class Matrix3x3 extends Matrix {
        constructor();
        static Identity(): number[][];
        static IsIdentity(matrix: Matrix): boolean;
    }
    export class Matrix4x4 extends Matrix {
        constructor();
        static Identity(): number[][];
        static IsIdentity(matrix: Matrix): boolean;
    }
}
declare module "src/imageutils" {
    import { TextureImageType } from "src/texture";
    /**
     * Converts an image into a Data URI string.
     * @param image
     */
    export function imageToDataURI(image: TextureImageType): string;
    /**
     * Converts an image into an ArrayBuffer.
     * @param image
     */
    export function imageToArrayBuffer(image: TextureImageType): Promise<ArrayBuffer>;
    /**
     * Converts a DataURI to an ArrayBuffer.
     * @param dataUri DataURI. `data:mimeType;base64,...`
     */
    export function dataUriToArrayBuffer(dataUri: string): ArrayBuffer;
    /**
     * Converts an ArrayBuffer into a base64 Data URI string.
     * @param buf Array buffer
     * @param mimeType Mime type of the data. Default is application/octet-stream.
     */
    export function encodeBase64DataUri(buf: ArrayBuffer, mimeType?: string): string;
    /** Determines if an ArrayBuffer holds a PNG format image. */
    export function arrayBufferIsPNG(buffer: ArrayBuffer): boolean;
}
declare module "src/texture" {
    import { WrappingMode } from "src/types";
    /**
     * Supported texture image types.
     * For ArrayBuffer, the current assumption is that the buffer contains PNG data.
     * For string, expectation is an image/png data uri.
     */
    export type TextureImageType = HTMLImageElement | HTMLCanvasElement | ArrayBuffer | string;
    /** Represents a model texture. */
    export class Texture {
        wrapS: WrappingMode;
        wrapT: WrappingMode;
        private __image;
        set image(val: TextureImageType);
        get image(): TextureImageType;
        constructor(image: TextureImageType);
    }
}
declare module "src/material" {
    import { Texture } from "src/texture";
    import { AlphaMode, VertexColorMode } from "src/types";
    export class Material {
        name: string;
        alphaCutoff: number;
        alphaMode: AlphaMode;
        doubleSided: boolean;
        vertexColorMode: VertexColorMode;
        pbrMetallicRoughness: PBRMetallicRoughness;
        normalTexture?: Texture;
        occlusionTexture?: Texture;
        emissiveTexture?: Texture;
    }
    export interface PBRMetallicRoughness {
        metallicFactor: number;
        roughnessFactor: number;
        baseColorFactor?: [number, number, number, number];
        baseColorTexture?: Texture;
        metallicRoughnessTexture?: Texture;
    }
}
declare module "src/vertex" {
    import { RGBColor, RGBAColor } from "src/types";
    /** Represents a mesh vertex. */
    export class Vertex {
        x: number;
        y: number;
        z: number;
        u: number;
        v: number;
        normalX?: number;
        normalY?: number;
        normalZ?: number;
        color?: RGBColor | RGBAColor;
    }
}
declare module "src/mesh" {
    import { Material } from "src/material";
    import { Vertex } from "src/vertex";
    import { MeshMode, RGBColor, RGBAColor } from "src/types";
    export class Mesh {
        material: Material[];
        mode: MeshMode;
        private _vertices;
        private _faceColors;
        private _materialIndices;
        addFace(v1: Vertex, v2: Vertex, v3: Vertex, color?: RGBColor | RGBAColor, materialIndex?: number): void;
        forEachFace(fn: (v1: Vertex, v2: Vertex, v3: Vertex, color: RGBColor | RGBAColor | undefined, materialIndex: number) => boolean | void): void;
    }
}
declare module "src/skin" {
    import { Node } from "src/node";
    export class Skin {
        name: string;
        skeletonNode: Node | null;
        constructor(skeletonNode?: Node | null, name?: string);
    }
}
declare module "src/node" {
    import { Vector3, Quaternion, Matrix4x4 } from "src/math";
    import { Mesh } from "src/mesh";
    import { Animation } from "src/animation";
    import { Skin } from "src/skin";
    export class Node {
        name: string;
        mesh?: Mesh;
        animations: Animation[];
        skin?: Skin;
        inverseBindMatrix?: Matrix4x4;
        private _nodes;
        private _translation?;
        private _rotation?;
        private _scale?;
        constructor(name?: string);
        addNode(node: Node): void;
        removeNode(node: Node | number): number;
        forEachNode(fn: (node: Node) => void): void;
        addAnimation(animation: Animation): void;
        removeAnimation(animation: Animation | number): number;
        setTranslation(x: number, y: number, z: number): void;
        getTranslation(): Vector3;
        setRotationDegrees(x: number, y: number, z: number): void;
        setRotationRadians(x: number, y: number, z: number): void;
        setRotationQuaternion(x: number, y: number, z: number, w: number): void;
        getRotationQuaternion(): Quaternion;
        setScale(x: number, y: number, z: number): void;
        getScale(): Vector3;
    }
}
declare module "src/scene" {
    import { Node } from "src/node";
    export class Scene {
        name: string;
        private _nodes;
        constructor(name?: string);
        addNode(node: Node): void;
        removeNode(node: Node | number): number;
        forEachNode(fn: (node: Node) => void): void;
    }
}
declare module "src/asset" {
    import { Scene } from "src/scene";
    export class GLTFAsset {
        copyright: string;
        defaultScene: number;
        generator: string;
        private _scenes;
        setDefaultScene(scene: number | Scene): void;
        addScene(scene: Scene): void;
        removeScene(scene: Scene): void;
        forEachScene(fn: (scene: Scene) => void): void;
    }
}
declare module "src/gltftypes" {
    import { AlphaMode, ComponentType, DataType, MeshMode, WrappingMode, BufferOutputType, ImageOutputType, InterpolationMode, Transformation } from "src/types";
    import { Buffer } from "src/buffer";
    import { Node } from "src/node";
    export interface glTF {
        asset: {
            version: string;
            copyright?: string;
            generator?: string;
        };
        scene?: number;
        buffers?: glTFBuffer[];
        bufferViews?: glTFBufferView[];
        nodes?: glTFNode[];
        scenes?: glTFScene[];
        accessors?: glTFAccessor[];
        meshes?: glTFMesh[];
        textures?: glTFTexture[];
        images?: glTFImage[];
        samplers?: glTFSampler[];
        materials?: glTFMaterial[];
        skins?: glTFSkin[];
        cameras?: glTFCamera[];
        animations?: glTFAnimation[];
        /** Extras used specifically by gltf-js-utils. */
        extras: {
            options: {
                bufferOutputType?: BufferOutputType;
                imageOutputType?: ImageOutputType;
            };
            binChunkBuffer: Buffer | null;
            promises: Promise<any>[];
            nodeIndices: Map<Node, number>;
        };
    }
    export interface glTFBuffer {
        name?: string;
        byteLength: number;
        uri?: string;
        extras?: any;
    }
    export interface glTFAnimationSampler {
        input: number;
        output: number;
        interpolation: InterpolationMode;
    }
    export interface glTFAnimationChannel {
        sampler: number;
        target: {
            node: number;
            path: Transformation;
        };
    }
    export interface glTFAnimation {
        name?: string;
        samplers: glTFAnimationSampler[];
        channels: glTFAnimationChannel[];
    }
    export interface glTFCamera {
        orthographic?: glTFCameraOrthographic;
        perspective?: glTFCameraPerspective;
        type: string;
        name?: string;
        extensions?: Record<string, unknown>;
        extras?: any;
    }
    export interface glTFCameraOrthographic {
        xmag: number;
        ymag: number;
        zfar: number;
        znear: number;
        extensions?: Record<string, unknown>;
        extras?: any;
    }
    export interface glTFCameraPerspective {
        aspectRatio?: number;
        yfov: number;
        zfar?: number;
        znear: number;
        extensions?: Record<string, unknown>;
        extras?: any;
    }
    export interface glTFSkin {
        inverseBindMatrices?: number;
        skeleton?: number;
        joints: number[];
        name?: string;
        extensions?: Record<string, unknown>;
        extras?: any;
    }
    export interface glTFBufferView {
        name?: string;
        buffer: number;
        byteLength: number;
        byteOffset?: number;
        byteStride?: number;
        target?: number;
        extras?: any;
    }
    export interface glTFNode {
        name?: string;
        camera?: number;
        children?: number[];
        mesh?: number;
        skin?: number;
        rotation?: [number, number, number, number];
        scale?: [number, number, number];
        translation?: [number, number, number];
        matrix?: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
        weights?: number;
    }
    export interface glTFScene {
        name?: string;
        nodes?: number[];
    }
    export interface glTFAccessor {
        name?: string;
        bufferView?: number;
        byteOffset?: number;
        componentType: ComponentType;
        normalized?: boolean;
        count: number;
        type: DataType;
        max?: number[];
        min?: number[];
        sparse?: glTFSparseAccessor;
    }
    export interface glTFSparseAccessor {
        count: number;
        indices: {
            bufferView: number;
            byteOffset?: number;
            componentType: ComponentType;
            extensions?: Record<string, unknown>;
            extras?: any;
        };
        values: {
            bufferView: number;
            byteOffset?: number;
            extensions?: Record<string, unknown>;
            extras?: any;
        };
        extensions?: Record<string, unknown>;
        extras?: any;
    }
    export interface glTFMesh {
        name?: string;
        primitives: glTFMeshPrimitives[];
        weights?: number[];
    }
    export interface glTFMeshPrimitives {
        attributes: glTFMeshPrimitiveAttributes;
        indices?: number;
        material?: number;
        mode?: MeshMode;
        targets?: any[];
    }
    export interface glTFMeshPrimitiveAttributes {
        [type: string]: number;
    }
    export type glTFAttribute = "POSITION" | "NORMAL" | "TANGENT" | "TEXCOORD_0" | "TEXCOORD_1" | "COLOR_0";
    export interface glTFTexture {
        name?: string;
        sampler?: number;
        source?: number;
    }
    export interface glTFImage {
        name?: string;
        uri?: string;
        mimeType?: "image/png" | "image/jpeg";
        bufferView?: number;
        extras?: any;
    }
    export interface glTFSampler {
        name?: string;
        magFilter?: number;
        minFilter?: number;
        wrapS: WrappingMode;
        wrapT: WrappingMode;
    }
    export interface glTFMaterial {
        name?: string;
        alphaMode?: AlphaMode;
        alphaCutoff?: number;
        doubleSided?: boolean;
        pbrMetallicRoughness?: glTFMetallicRoughness;
        normalTexture?: glTFMaterialTex;
        emissiveFactor?: [number, number, number];
        emissiveTexture?: glTFMaterialTex;
    }
    export interface glTFMetallicRoughness {
        baseColorFactor?: [number, number, number, number];
        baseColorTexture?: glTFMaterialTex;
        metallicFactor?: number;
        roughnessFactor?: number;
        metallicRoughnessTexture?: glTFMaterialTex;
    }
    export interface glTFMaterialTex {
        index: number;
        texCoord?: number;
        scale?: number;
    }
}
declare module "src/buffer" {
    import { ComponentType, DataType } from "src/types";
    import { glTF, glTFAttribute } from "src/gltftypes";
    export class Buffer {
        private _gltf;
        private _gltfBuffer;
        private _index;
        private _bufferViews;
        private _finalizePromise?;
        private _finalized;
        constructor(gltf: glTF);
        getIndex(): number;
        addBufferView(componentType: ComponentType, dataType: DataType): BufferView;
        getByteOffset(bufferView: BufferView): number;
        getViewFinalizePromises(targetBufferView?: BufferView): Promise<void>[];
        getArrayBuffer(): ArrayBuffer;
        finalize(): Promise<void>;
        private _getTotalSize;
    }
    export class BufferView {
        private _buffer;
        private _componentType;
        private _dataType;
        private _data;
        private _gltfBufferView;
        private _index;
        private _asyncWritePromise?;
        private _finalized;
        private _finalizedPromise?;
        private _finalizedPromiseResolve?;
        private _accessorIndex;
        private _accessorAttr;
        private _accessorMin;
        private _accessorMax;
        constructor(buffer: Buffer, gltf: glTF, componentType: ComponentType, dataType: DataType);
        getBuffer(): Buffer;
        getIndex(): number;
        push(item: number): void;
        getDataSize(): number;
        getSize(): number;
        getByteOffset(): number;
        writeOutToBuffer(buffer: ArrayBuffer, startIndex?: number): void;
        writeAsync(buffer: Promise<ArrayBuffer>): Promise<void>;
        startAccessor(attr?: glTFAttribute | null): void;
        endAccessor(): BufferAccessorInfo;
        get finalized(): Promise<void>;
        finalize(): Promise<void>;
        private _getElementSize;
        private _sizeOfComponentType;
        private _numComponentsForDataType;
        private _writeValue;
    }
    export interface BufferAccessorInfo {
        byteOffset: number;
        componentType: ComponentType;
        count: number;
        type: DataType;
        min: number[];
        max: number[];
        normalized?: boolean;
    }
}
declare module "src/glb" {
    export function createGLBBuffer(json: string, bin?: ArrayBuffer | null): ArrayBuffer;
}
declare module "src/gltf" {
    import { glTF } from "src/gltftypes";
    import { GLTFAsset } from "src/asset";
    import { Node } from "src/node";
    import { Buffer, BufferAccessorInfo } from "src/buffer";
    import { Animation } from "src/animation";
    import { Skin } from "src/skin";
    export function createEmptyGLTF(): glTF;
    export function addScenes(gltf: glTF, asset: GLTFAsset): void;
    export function addSkin(gltf: glTF, skin: Skin, node: Node): number;
    export function addAnimations(gltf: glTF, animations: Animation[], nodeIndex: number): void;
    export function addBuffer(gltf: glTF): Buffer;
    export function addAccessor(gltf: glTF, bufferViewIndex: number, accessorInfo: BufferAccessorInfo): number;
}
declare module "src/index" {
    export { GLTFAsset } from "src/asset";
    export { Scene } from "src/scene";
    export { Node } from "src/node";
    export { Mesh } from "src/mesh";
    export { Material } from "src/material";
    export { Texture } from "src/texture";
    export { Vertex } from "src/vertex";
    export { Skin } from "src/skin";
    export { Animation } from "src/animation";
    export { Vector3, Quaternion, Matrix, Matrix3x3, Matrix4x4 } from "src/math";
    export { AlphaMode, ComponentType, DataType, MeshMode, RGBColor, RGBAColor, VertexColorMode, WrappingMode, InterpolationMode, Transformation, } from "src/types";
    export { ImageOutputType, BufferOutputType } from "src/types";
    export { Buffer, BufferView } from "src/buffer";
    export type { BufferAccessorInfo } from "src/buffer";
    import { GLTFAsset } from "src/asset";
    import { ImageOutputType, BufferOutputType } from "src/types";
    import * as jsz from "jszip";
    /** Options for glTF export APIs. */
    export interface GLTFExportOptions {
        /** Controls how buffers are outputted. */
        bufferOutputType?: BufferOutputType;
        /** Controls how texture images are outputted. */
        imageOutputType?: ImageOutputType;
        /** Size of indentation to use when stringify-ing the glTF model (default: 4) */
        jsonSpacing?: number;
    }
    const MODEL_NAME_GLTF = "model.gltf";
    const MODEL_NAME_GLB = "model.glb";
    /** Return type of a glTF export function. */
    export type GLTFExportType = {
        [filename: string]: ArrayBuffer | string;
    };
    export type GLTFExportTypeWithGLTF = {
        [filename: string]: ArrayBuffer | string;
        [MODEL_NAME_GLTF]: string;
    };
    export type GLTFExportTypeWithGLB = {
        [filename: string]: ArrayBuffer | string;
        [MODEL_NAME_GLB]: ArrayBuffer;
    };
    /**
     * Creates a GLB glTF model from a GLTFAsset structure.
     * @param asset GLTFAsset model structure
     * @param options Export options
     * @returns Promise for an object, each key pointing to a file.
     */
    export function exportGLTF(asset: GLTFAsset, options: {
        imageOutputType: ImageOutputType.GLB;
    } | {
        bufferOutputType: BufferOutputType.GLB;
    }): Promise<GLTFExportTypeWithGLB>;
    /**
     * Creates a glTF model from a GLTFAsset structure.
     * @param asset GLTFAsset model structure
     * @param options Export options
     * @returns Promise for an object, each key pointing to a file.
     */
    export function exportGLTF(asset: GLTFAsset, options?: GLTFExportOptions): Promise<GLTFExportTypeWithGLTF>;
    /**
     * Creates a ZIP file of a glTF model from a GLTFAsset structure.
     * @param asset GLTFAsset model structure
     * @param jsZip JSZip instance
     * @param options Export options
     * @returns A Promise to receive a ZIP blob is returned instead.
     */
    export function exportGLTFZip(asset: GLTFAsset, jsZip: jsz, options?: GLTFExportOptions): Promise<Blob>;
    /**
     * Creates a GLB binary format glTF model from a GLTFAsset structure.
     * @param asset GLTFAsset model structure
     * @returns An ArrayBuffer containing the GLB file.
     */
    export function exportGLB(asset: GLTFAsset): Promise<ArrayBuffer>;
}
declare module "test/asset.spec" {
    import "mocha";
}
declare module "test/math.spec" {
    import "mocha";
}
declare module "test/texture.spec" {
    import "mocha";
}
declare module "test/integration/triangle.spec" { }
