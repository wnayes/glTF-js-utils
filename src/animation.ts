import {InterpolationMode, TRSMode} from "./types";

export interface KeyframeExtras // for cubicspline interpolation
{
    outTangent?: number; // default 1
    outTangentWeight?: number; // default 1
    inTangent?: number; // default 1
    inTangentWeight?: number; // default 1
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
            throw "CUBICSPLINE NOT IMPLEMENTED"

            let ext: KeyframeExtras = {};
            if (extras)
            {
                if (extras.inTangent) ext.inTangent = extras.inTangent;
                if (extras.inTangentWeight) ext.inTangentWeight = extras.inTangentWeight;
                if (extras.outTangent) ext.outTangent = extras.outTangent;
                if (extras.outTangentWeight) ext.outTangentWeight = extras.outTangentWeight;
            }

            if (Object.keys(ext).length > 0)
                kf.extras = ext;
        }

        this.keyframes.push(kf);
    }
}