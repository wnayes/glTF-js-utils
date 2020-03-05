import {InterpolationMode, TRSMode} from "./types";

export interface KeyframeExtras // for cubicspline interpolation
{
    outTangent: number; // default 1
    outTangentWeight: number; // default 1
    inTangent: number; // default 1
    inTangentWeight: number; // default 1
}

export interface Keyframe
{
    time: number;
    value: number[];
    interp_type: InterpolationMode;
    extras?: KeyframeExtras;
}

export class Animation 
{
    // private _channels: Channel[] = [];
    // private _samplers: Sampler[] = [];
    // private _name: string = "";
    // private _extensions: object = {};
    // private _extras: any = {};

    public keyframes: Keyframe[] = [];
    public path: TRSMode;

    public constructor(path: TRSMode)
    {
        this.path = path;
    }

    public addKeyframe(time: number, value: number[], interp_type: InterpolationMode, extras?:any)
    {
        console.assert(value.length >= 3);

        let kf : Keyframe = {
            interp_type: interp_type,
            time: time,
            value: value
        };
        if (interp_type === InterpolationMode.CUBICSPLINE)
        {
            let ext: KeyframeExtras = {
                inTangent: 1,
                inTangentWeight: 1,
                outTangent: 1,
                outTangentWeight: 1
            };
            if (extras)
            {
                if (extras.inTangent) ext.inTangent = extras.inTangent;
                if (extras.inTangentWeight) ext.inTangentWeight = extras.inTangentWeight;
                if (extras.outTangent) ext.outTangent = extras.outTangent;
                if (extras.outTangentWeight) ext.outTangentWeight = extras.outTangentWeight;
            }

            kf.extras = ext;
        }

        this.keyframes.push(kf);
    }
}