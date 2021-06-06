gltf-js-utils
=============

Helper library for creating glTF 2.0 models with JavaScript.

## Usage

#### Creating glTF from scratch

Create a `GLTFAsset` structure using the provided types.

```javascript
import {
  GLTFAsset, Scene, Node, Material, Texture, Mesh, Vertex, WrappingMode
} from "gltf-js-utils";

const asset = new GLTFAsset();
const scene = new Scene();
asset.addScene(scene);

const node = new Node();
node.setTranslation(x, y, z);
node.setRotationRadians(x, y, z);
node.setScale(x, y, z);
scene.addNode(node);

const material = new Material();
// Supported texture types: HTMLImageElement | HTMLCanvasElement | ArrayBuffer (PNG) | Data URL (PNG)
const texture = new Texture(image);
texture.wrapS = WrappingMode.CLAMP_TO_EDGE;
texture.wrapT = WrappingMode.REPEAT;
material.pbrMetallicRoughness.baseColorTexture = texture;

const mesh = new Mesh();
mesh.material = [material];
node.mesh = mesh;

const v1 = new Vertex();
v1.x = 1;
v1.y = 1;
v1.z = 1;
v1.u = 0;
v1.v = 0;
const v2 = new Vertex();
// ...

const faceColor = undefined;
const faceMaterialIndex = 0;
mesh.addFace(v1, v2, v3, faceColor, faceMaterialIndex);
mesh.addFace(v4, v5, v6, faceColor, faceMaterialIndex);
// ...
```

###### Create Animation

```javascript
import { Node, Animation, InterpolationMode, Transformation } from "gltf-js-utils";

const node = new Node();
scene.addNode(node);
const nodeAnim = new Animation(Transformation.TRANSLATION);
nodeAnim.keyframes = [
    {
        time: 0,
        value: [1, 2, 3],
        interpType: InterpolationMode.LINEAR
    },
    {
        time: 0.3,
        value: [4, 5, 6],
        interpType: InterpolationMode.LINEAR
    }
];
// or add keyframes via addKeyframe function
nodeAnim1.addKeyframe(0.8, [7, 8, 9], InterpolationMode.STEP);
node.animations = [nodeAnim];
```

##### Export to a collection of individual files/data

With the default options, you'll receive an object keyed with the glTF JSON and binary buffers.

```javascript
import { exportGLTF } from "gltf-js-utils";

const gltfFiles = await exportGLTF(asset);
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
import { exportGLTF, BufferOutputType } from "gltf-js-utils";

const gltfFiles = await exportGLTF(asset, {
  bufferOutputType: BufferOutputType.DataURI,
  imageOutputType: BufferOutputType.DataURI,
});
// {
//   "model.gltf": string /* JSON glTF string, all data embedded */
// }
```

##### Export to a ZIP file

Requires a `JSZip` reference. The result will be a ZIP blob.

```javascript
import * as JSZip from "jszip";
import { exportGLTFZip } from "gltf-js-utils";

exportGLTFZip(asset, JSZip).then(blob => {
  // Use FileSaver as an example.
  saveAs(blob, "model.zip");
});
```

#### Create glTF from Three.js object

Use the separate [`gtlf-js-utils-three` package](https://github.com/wnayes/glTF-js-utils-three)
to create glTF models from Three.js models.
See the `gtlf-js-utils-three` documentation for more details.

```javascript
import { exportGLTF } from "gltf-js-utils";
import { glTFAssetFromTHREE } from "gltf-js-utils-three";

// Create a Three.js Scene or Object3D structure...
const scene = new THREE.Scene();
...

const gltfFiles = await exportGLTF(glTFAssetFromTHREE(scene));
```

#### Create a GLB container

Calling `exportGLB` will produce a single GLB model in an ArrayBuffer.

```javascript
import { exportGLB } from "gltf-js-utils";

const glbArrayBuffer = await exportGLB(asset);
```

You can also use `exportGLTF` with the GLB output type to selectively keep some assets external.

```javascript
import { exportGLTF, BufferOutputType } from "gltf-js-utils";

const gltfFiles = await exportGLTF(asset, {
  bufferOutputType: BufferOutputType.GLB,
  imageOutputType: BufferOutputType.External,
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
* No support for camera yet.

## Development

To build:

    npm install
    npm run build

To test:

    npm run test

## License

MIT
