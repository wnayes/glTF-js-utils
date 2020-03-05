import * as GLTFUtils from "../src/index";
import {ComponentType, DataType} from "../src/index";
import {glTF, glTFAnimation, glTFAnimationChannel, glTFAnimationSampler} from "../src/gltftypes";
import {InterpolationMode, TRSMode} from "../src/types";
import {addAccessor, addBuffer, addScenes} from "../src/gltf";

function flatten(arr: Array<any>): Array<any> {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

function createGLTF(asset: GLTFUtils.GLTFAsset): glTF {
    const gltf: glTF = {
        asset: {
            version: "2.0",
            copyright: asset.copyright,
            generator: asset.generator,
        },
        extras: {
            options: {},
            binChunkBuffer: null,
            promises: [],
        }
    };
    return gltf;
}


function test1() {
    const asset = new GLTFUtils.GLTFAsset();
    const scene = new GLTFUtils.Scene();

    const gltf = createGLTF(asset);

    asset.addScene(scene);

    let x = 1;
    let y = 2;
    let z = 3;

    const node = new GLTFUtils.Node();
    node.setTranslation(x, y, z);
    node.setRotationRadians(x, y, z);
    node.setScale(x, y, z);
    scene.addNode(node);

    addScenes(gltf, asset);

    console.assert(gltf.scenes!.length === 1 && gltf.nodes!.length === 1 && gltf.scenes![0].nodes![0] === 0)

    let buffer = addBuffer(gltf); // for translation
    let bufferView = buffer.addBufferView(ComponentType.FLOAT, DataType.VEC3); // add translation
    let bufferView2 = buffer.addBufferView(ComponentType.FLOAT, DataType.VEC4); // add quat
    let bufferView3 = buffer.addBufferView(ComponentType.FLOAT, DataType.SCALAR);
    console.assert(bufferView.getIndex() === 0 && bufferView2.getIndex() === 1);

    function createAccessor(bufferView: GLTFUtils.BufferView, num: number = 1)
    {
        bufferView.startAccessor("POSITION");

        num = Math.max(0, num);
        for (let i = 0; i < num; ++i)
        {
            bufferView.push(i*3);
            bufferView.push(i*3+1);
            bufferView.push(i*3+2);
        }

        let accessor = bufferView.endAccessor();
        addAccessor(gltf, bufferView.getIndex(), accessor);
    }

    createAccessor(bufferView, 1);
    let acc1 = gltf.accessors![0];
    console.assert(acc1.count === 1 && acc1.max![0] === 0 && acc1.min![0] === 0 && acc1.min![1] === 1);

    createAccessor(bufferView, 2);
    acc1 = gltf.accessors![1];
    console.assert(acc1.count === 2 && acc1.byteOffset === 3 * 4 && acc1.max![0] === 3 && acc1.min![0] === 0);

    function createAnimation()
    {
        let animation_sample = [
            {
                "samplers" : [
                    {
                        "input" : 2,
                        "interpolation" : "LINEAR",
                        "output" : 3
                    }
                ],
                "channels" : [ {
                    "sampler" : 0,
                    "target" : {
                        "node" : 0,
                        "path" : "rotation"
                    }
                } ]
            }
        ]

        let node_idx = 0;

        let myAnimation: glTFAnimation = {
            channels: [],
            samplers: []
        }

        let times = [0, 0.2, 0.4, 0.6, 0.8];
        let values = [];

        let num = times.length;
        let interp_type = InterpolationMode.LINEAR; // samplers
        for (let i = 0; i < num; ++i)
        {
            values.push([i*4, i*4+1, i*4+2, i*4+3]);
        }

        // create times accessor and values accessor first
        bufferView3.startAccessor("POSITION"); // POSITION is just a placeholder
        for (let t of times)
            bufferView3.push(t);
        let accessor = bufferView3.endAccessor();
        let accessor_idx = addAccessor(gltf, bufferView3.getIndex(), accessor);

        let flat = flatten(values);
        bufferView2.startAccessor("POSITION"); // POSITION is just a placeholder
        for (let v of flat)
            bufferView2.push(v);
        let accessor2 = bufferView2.endAccessor();
        let accessor2_idx = addAccessor(gltf, bufferView2.getIndex(), accessor2);

        // then create samplers (input: times accessor idx, output: values accessor idx)
        let sampler: glTFAnimationSampler = {
            "input": accessor_idx,
            "output": accessor2_idx,
            "interpolation": interp_type
        };
        myAnimation.samplers.push(sampler);
        let sampler_idx = myAnimation.samplers.length;
        // then create channels (sampler: get sampler idx from above)
        let channel: glTFAnimationChannel = {
            "sampler": sampler_idx,
            "target": {
                "node": node_idx,
                "path": TRSMode.ROTATION
            }
        };
        myAnimation.channels.push(channel);

        if (!gltf.animations)
            gltf.animations = [];
        gltf.animations.push(myAnimation)
    }

    createAnimation();

    let promises = [];
    bufferView.finalize();
    bufferView2.finalize();
    bufferView3.finalize();
    promises.push(buffer.finalize());

    let bufv1 = gltf.bufferViews![0];
    let buf1 = gltf.buffers![0];

    Promise.all(promises).then(() => {
        console.assert(bufv1.byteLength === 3 * 3 * 4)
        // console.assert(buf1.byteLength === 3 * 3 * 4);
        console.log(gltf)
        console.log(gltf.animations)
        console.log(buf1.uri)
    });
// console.log(gltf.scenes);
// console.log(gltf.accessors)
}

function test2() {

    const asset = new GLTFUtils.GLTFAsset();
    const scene = new GLTFUtils.Scene();

    const gltf = createGLTF(asset);

    asset.addScene(scene);

    let x = 1;
    let y = 2;
    let z = 3;

    const node = new GLTFUtils.Node();
    node.setTranslation(x, y, z);
    node.setRotationRadians(x, y, z);
    node.setScale(x, y, z);
    scene.addNode(node);

    let nodeAnim1 = new GLTFUtils.Animation(TRSMode.ROTATION);
    nodeAnim1.keyframes = [
        {
            time: 0,
            value: [1,2,3,4],
            interp_type: InterpolationMode.LINEAR
        },
        {
            time: 0.2,
            value: [2,3,4,5],
            interp_type: InterpolationMode.LINEAR
        },
        {
            time: 0.4,
            value: [2,3,4,5],
            interp_type: InterpolationMode.LINEAR
        },
        {
            time: 0.6,
            value: [1,2,3,4],
            interp_type: InterpolationMode.CUBICSPLINE
        }
    ];
    nodeAnim1.addKeyframe(0.8, [1,2,3,4], InterpolationMode.CUBICSPLINE);

    let nodeAnim2 = new GLTFUtils.Animation(TRSMode.TRANSLATION);
    nodeAnim2.keyframes = [
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
    node.animations = [nodeAnim1, nodeAnim2];

    addScenes(gltf, asset);

    // console.log(gltf.animations)
    // console.log(gltf.accessors);
    //
    const gltfAnim = gltf.animations![0];
    console.assert(gltfAnim.samplers!.length === 3);
    console.assert(gltfAnim.channels!.length === 3);
    let channel1 = gltfAnim.channels![0]; // path: ROTATION
    let channel2 = gltfAnim.channels![1]; // path: ROTATION
    let channel3 = gltfAnim.channels![2]; // path: TRANSLATION

    let sampler1 = gltfAnim.samplers![0]; // interpolation: LINEAR
    let sampler2 = gltfAnim.samplers![1]; // interpolation: CUBICSPLINE
    let sampler3 = gltfAnim.samplers![2]; // interpolation: LINEAR

    // assert channel targets
    console.assert(
        channel1.sampler === 0 && channel2.sampler === 1 && channel3.sampler === 2
    );
    console.assert(
        channel1.target.path == TRSMode.ROTATION && channel2.target.path == TRSMode.ROTATION
        && channel3.target.path == TRSMode.TRANSLATION
    );
    // assert sampler interpolation types
    console.assert(sampler1.interpolation == InterpolationMode.LINEAR &&
        sampler2.interpolation == InterpolationMode.CUBICSPLINE &&
        sampler3.interpolation == InterpolationMode.LINEAR
    );
    // assert sampler input/output indices
    console.assert(sampler1.input === 0 && sampler1.output === 1 &&
        sampler3.input === 4 && sampler3.output === 5
    );

    // assert accessors
    const accessors = gltf.accessors!;
    console.assert(accessors.length === gltfAnim.samplers!.length*2); // 2 accessors (time, animation) per sampler/channel
    // time bufferviews are the same (index 0)
    console.assert(
        accessors[0].bufferView === 0 && accessors[2].bufferView === 0 &&
        accessors[4].bufferView === 0 &&
        accessors[0].type === DataType.SCALAR && accessors[2].type === DataType.SCALAR &&
        accessors[4].type === DataType.SCALAR
    );
    // rotation bufferview
    console.assert(accessors[1].bufferView === 1 && accessors[3].bufferView === 1
        && accessors[1].type === DataType.VEC4 && accessors[3].type === DataType.VEC4
    );
    // translation bufferview
    console.assert(accessors[5].bufferView === 2 && accessors[5].type === DataType.VEC3);
    console.assert(accessors[5].min![0] === 1 && accessors[5].max![2] === 6);

    {
        let count = accessors[0].count;
        console.assert(count === accessors[1].count && count === 3);
        console.assert(accessors[2].byteOffset === 3 * 4 && accessors[3].byteOffset === 3 * 4 * 4)
        count = accessors[2].count;
        console.assert(count === accessors[3].count && count === 2);
        console.assert(accessors[4].byteOffset === (3+2) * 4 && accessors[5].byteOffset === 0);
        count = accessors[4].count;
        console.assert(count === accessors[5].count && count === 2);
    }

    let num_time = 7;
    let num_vec4 = 5;
    let num_vec3 = 2;
    let time_bytes = num_time * 4;
    let vec3_bytes = num_vec3 * 3 * 4;
    let vec4_bytes = num_vec4 * 4 * 4;
    let total_bytes = time_bytes + vec3_bytes + vec4_bytes;
    // assert accessors

    Promise.all(gltf.extras.promises).then(()=>{
        const buffer = gltf.buffers![0];
        console.assert(gltf.bufferViews!.length === 3);
        const bufferView1 = gltf.bufferViews![0];
        const bufferView2 = gltf.bufferViews![1];
        const bufferView3 = gltf.bufferViews![2];
        console.assert(bufferView1.buffer === 0 && bufferView2.buffer === 0 && bufferView3.buffer === 0);

        console.assert(buffer.byteLength === total_bytes);
        console.assert(bufferView1.byteLength === time_bytes);
        console.assert(bufferView2.byteLength === vec4_bytes);
        console.assert(bufferView3.byteLength === vec3_bytes);
        console.assert(bufferView2.byteOffset === time_bytes);
        console.assert(bufferView3.byteOffset === time_bytes + vec4_bytes);
        console.log(gltf);
        console.log(buffer.uri);
        console.log("PASSED")
    })
}

// test1();
test2();
