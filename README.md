gltf-js-utils
=============

Helper library for creating glTF 2.0 models with JavaScript.

Includes a basic Three.js to glTF converter.

## Usage

#### Creating glTF from scratch

Create a `GLTFAsset` structure using the provided types.

```javascript
import * as GLTFUtils from "gltf-js-utils";

const asset = new GLTFUtils.GLTFAsset();
const scene = new GLTFUtils.Scene();
asset.addScene(scene);

const node = new GLTFUtils.Node();
node.setTranslation(x, y, z);
node.setRotationRadians(x, y, z);
node.setScale(x, y, z);
scene.addNode(node);

const material = new GLTFUtils.Material();
const texture = new GLTFUtils.Texture(image); // HTMLImageElement
texture.wrapS = GLTFUtils.WrappingMode.CLAMP_TO_EDGE;
texture.wrapT = GLTFUtils.WrappingMode.REPEAT;
material.pbrMetallicRoughness.baseColorTexture = texture;

const mesh = new GLTFUtils.Mesh();
mesh.material = [material];

const v1 = new GLTFUtils.Vertex();
v1.x = 1;
v1.y = 1;
v1.z = 1;
v1.u = 0;
v1.v = 0;
const v2 = new GLTFUtils.Vertex();
// ...

mesh.addFace(v1, v2, v3, faceMaterialIndex /* 0 */);
mesh.addFace(v4, v5, v6, faceMaterialIndex);
// ...
```

###### Create Animation
```
const node = new GLTFUtils.Node();
scene.addNode(node);
let nodeAnim = new GLTFUtils.Animation(GLTFUtils.TRSMode.TRANSLATION);
const InterpolationMode = GLTFUtils.InterpolationMode;
nodeAnim.keyframes = [
    {
        time: 0,
        value: [1,2,3],
        interp_type: InterpolationMode.LINEAR
    },
    {
        time: 0.3,
        value: [4,5,6],
        interp_type: InterpolationMode.LINEAR
    }
];
// or add keyframes via addKeyframe function
nodeAnim1.addKeyframe(0.8, [7,8,9], InterpolationMode.STEP);
node.animations = [nodeAnim];
```

##### Export to a collection of individual files/data

With the default options, you'll receive an object keyed with the glTF JSON and binary buffers.

```javascript
const gltfFiles = await GLTFUtils.exportGLTF(asset);
// {
//   "model.gltf": string /* JSON glTF string */
//   "data1.bin": ArrayBuffer /* ArrayBuffer of buffer data */
//   "data2.bin": ArrayBuffer,
//   "data3.bin": ArrayBuffer,
//   ...
//   "img1.png": ArrayBuffer /* Texture image */
//   "img2.png": ArrayBuffer
//   ...
// }
```

##### Export using data URIs

Buffers and/or images can be embedded within the JSON as data URIs.

```javascript
const gltfFiles = await GLTFUtils.exportGLTF(asset, {
  bufferOutputType: GLTFUtils.BufferOutputType.DataURI,
  imageOutputType: GLTFUtils.BufferOutputType.DataURI,
});
// {
//   "model.gltf": string /* JSON glTF string, all data embedded */
// }
```

##### Export to a ZIP file

Requires a `JSZip` reference. The result will be a ZIP blob.

```javascript
GLTFUtils.exportGLTFZip(asset, JSZip).then(blob => {
  // Use FileSaver as an example.
  saveAs(blob, "model.zip");
});
```

#### Create glTF from Three.js object

```javascript
import { glTFAssetFromTHREE, exportGLTF } from "gltf-js-utils";

// Create a Three.js Scene or Object3D structure...
const scene = new THREE.Scene();
...

const gltfFiles = await exportGLTF(glTFAssetFromTHREE(scene));
```

#### Create a GLB container

Calling `exportGLB` will produce a single GLB model in an ArrayBuffer.

```javascript
const glbArrayBuffer = await GLTFUtils.exportGLB(asset);
```

You can also use `exportGLTF` with the GLB output type to selectively keep some assets external.

```javascript
const gltfFiles = await GLTFUtils.exportGLTF(asset, {
  bufferOutputType: GLTFUtils.BufferOutputType.GLB,
  imageOutputType: GLTFUtils.BufferOutputType.External,
});
// {
//   "model.glb": ArrayBuffer
//   ...
//   // Only images follow, data bins are in the GLB file
//   "img1.png": ArrayBuffer /* Texture image */
//   "img2.png": ArrayBuffer
// }
```

## Limitations

* Overall glTF support is limited (no cameras, skins, animations)
* Three.js export is limited to basic functionality (`MeshBasicMaterial`)

## Development

To build:

    npm install
    npm run build

## License

MIT
