gltf-js-utils
=============

Helper library for creating glTF 2.0 models with JavaScript.

Includes a basic Three.js to glTF converter.

## Usage

#### Creating glTF from scratch

```javascript
import * as GLTFUtils from "glTF-js-utils";

const asset = new GLTFUtils.GLTFAsset();
const scene = new GLTFUtils.Scene();
asset.addScene(scene);

const node = new GLTFUtils.Node();
node.setTranslation(x, y, z);
node.setRotationRadians(x, y, z);
node.setScale(x, y, z);
scene.addNode(node);

const material = new GLTFUtils.Material();
const texture = new GLTFUtils.Texture();
texture.image = image; // HTMLImageElement
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

// Export to a collection of individual files/data:
const gltf = GLTFUtils.exportGLTF(asset);
// {
//   "model.gltf": string /* JSON glTF string */
//   "data1.bin": ArrayBuffer /* ArrayBuffer of buffer data */
//   "data2.bin": ArrayBuffer,
//   "data3.bin": ArrayBuffer,
//   ...
//   "img1.png": /* Texture image */
//   "img2.png": /* Texture image */
//   ...
// }

// Export using data URIs (no extra files created):
const gltf = GLTFUtils.exportGLTF(asset, {
  bufferOutputType: GLTFUtils.BufferOutputType.DataURI,
  imageOutputType: GLTFUtils.BufferOutputType.DataURI,
});
// {
//   "model.gltf": string /* JSON glTF string, all data embedded */
// }

// Export to a ZIP file (requires JSZip reference):
GLTFUtils.exportGLTFZip(asset, JSZip).then(blob => {
  // Use FileSaver as an example.
  saveAs(blob, "model.zip");
});
```

#### Create glTF from Three.js object

```javascript
import { glTFAssetFromTHREE, exportGLTF } from "glTF-js-utils";

// Create a Three.js Scene or Object3D structure...
const scene = new THREE.Scene();
...

exportGLTF(glTFAssetFromTHREE(scene));
```

## Limitations

* Overall glTF support is limited (no cameras, skins, animations)
* Three.js export is limited to basic functionality (`MeshBasicMaterial`)
* No GLB container support

## Development

To build:

    npm install
    npm run build

## License

MIT
