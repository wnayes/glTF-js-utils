export { GLTFAsset } from "./asset";
export { Scene } from "./scene";
export { Node } from "./node";
export { Mesh } from "./mesh";
export { Material } from "./material";
export { Texture } from "./texture";
export { Vertex } from "./vertex";
export { glTFAssetFromTHREE } from "./threejs";
import { Buffer } from "./buffer";
import { AlphaMode, ComponentType, DataType, MeshMode } from "./types";
export var BufferOutputType;
(function (BufferOutputType) {
    BufferOutputType[BufferOutputType["External"] = 0] = "External";
    //DataURI,
})(BufferOutputType || (BufferOutputType = {}));
export function exportGLTF(asset, options) {
    var zip = new JSZip();
    var gltf = {
        asset: {
            version: "2.0",
            copyright: asset.copyright,
            generator: asset.generator,
        },
    };
    addScenes(gltf, asset);
    var currentExtra = 1;
    zip.file("model.gltf", JSON.stringify(gltf, function (key, value) {
        if (value instanceof ArrayBuffer) {
            var filename = "extra" + currentExtra + ".bin";
            zip.file(filename, value);
            return filename;
        }
        return value;
    }, 4));
    return zip.generateAsync({ type: "blob" });
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
    var gltfScene = {
        name: scene.name,
    };
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
    var gltfNode = {
        name: node.name,
        rotation: node.getRotationQuaternion().toArray(),
        translation: node.getTranslation().toArray(),
        scale: node.getScale().toArray(),
    };
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
    if (mesh.mode !== MeshMode.TRIANGLES)
        throw "MeshMode other than TRIANGLES not currently supported";
    var materials = addMaterials(gltf, mesh.material);
    var gltfMesh = {
        primitives: [],
    };
    var addedIndex = gltf.meshes.length;
    gltf.meshes.push(gltfMesh);
    var meshBuffer = new Buffer();
    var meshBufferIndex = addBuffer(gltf, meshBuffer);
    var vertexBufferView = meshBuffer.addBufferView(ComponentType.FLOAT, DataType.VEC3);
    var vertexBufferIndex = addBufferView(gltf, vertexBufferView, meshBufferIndex);
    var vertexNormalBufferView = meshBuffer.addBufferView(ComponentType.FLOAT, DataType.VEC3);
    var vertexNormalBufferIndex = addBufferView(gltf, vertexNormalBufferView, meshBufferIndex);
    var vertexUVBufferView = meshBuffer.addBufferView(ComponentType.FLOAT, DataType.VEC2);
    var vertexUVBufferIndex = addBufferView(gltf, vertexUVBufferView, meshBufferIndex);
    var lastMaterialIndex = null;
    mesh.forEachFace(function (v1, v2, v3, materialIndex) {
        // Need to start new accessors
        if (lastMaterialIndex !== materialIndex) {
            // And end the previous ones.
            if (lastMaterialIndex !== null) {
                var vertexBufferAccessorInfo = vertexBufferView.endAccessor();
                var vertexNormalBufferAccessorInfo = vertexNormalBufferView.endAccessor();
                var vertexUVBufferAccessorInfo = vertexUVBufferView.endAccessor();
                gltfMesh.primitives.push({
                    attributes: {
                        POSITION: addAccessor(gltf, vertexBufferIndex, vertexBufferAccessorInfo),
                        NORMAL: addAccessor(gltf, vertexNormalBufferIndex, vertexNormalBufferAccessorInfo),
                        TEXCOORD_0: addAccessor(gltf, vertexUVBufferIndex, vertexUVBufferAccessorInfo),
                    },
                    material: lastMaterialIndex,
                    mode: mesh.mode,
                });
            }
            vertexBufferView.startAccessor();
            vertexNormalBufferView.startAccessor();
            vertexUVBufferView.startAccessor();
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
    });
    finalizeBuffer(gltf, meshBufferIndex);
    finalizeBufferView(gltf, vertexBufferIndex);
    finalizeBufferView(gltf, vertexNormalBufferIndex);
    finalizeBufferView(gltf, vertexUVBufferIndex);
    return addedIndex;
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
    if (material.alphaMode !== AlphaMode.OPAQUE)
        gltfMaterial.alphaMode = material.alphaMode;
    if (material.alphaCutoff !== 0.5)
        gltfMaterial.alphaCutoff = material.alphaCutoff;
    if (material.doubleSided)
        gltfMaterial.doubleSided = true;
    if (material.pbrMetallicRoughness) {
        gltfMaterial.pbrMetallicRoughness = {};
        //gltfMaterial.pbrMetallicRoughness.baseColorFactor = material.pbrMetallicRoughness.baseColorFactor;
        if (material.pbrMetallicRoughness.baseColorTexture) {
            var textureIndex = addTexture(gltf, material.pbrMetallicRoughness.baseColorTexture);
            gltfMaterial.pbrMetallicRoughness.baseColorTexture = { index: textureIndex };
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
    var gltfImage = {
        uri: imageToDataURI(image),
    };
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
    var addedIndex = gltf.samplers.length;
    gltf.samplers.push(gltfSampler);
    return addedIndex;
}
function imageToDataURI(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    return canvas.toDataURL();
}
