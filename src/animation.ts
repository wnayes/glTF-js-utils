import {InterpolationMode, TRSMode} from "./types";

// for cubicspline interpolation
export interface KeyframeExtras {
  outTangent?: [number, number, number]; // default 1
  outTangentWeight?: [number, number, number]; // default 1
  inTangent?: [number, number, number]; // default 1
  inTangentWeight?: [number, number, number]; // default 1
}

export interface Keyframe {
  time: number;
  value: number[];
  interpType: InterpolationMode;
  extras?: KeyframeExtras;
}

export class Animation {
  public keyframes: Keyframe[] = [];
  public path: TRSMode;
  public name: string = "";

  public constructor(path: TRSMode, name: string = "") {
    this.path = path;
    this.name = name;
  }

  public addKeyframe(time: number, value: number[], interpType: InterpolationMode, extras?:any) {
    console.assert(value.length >= 3);

    let kf : Keyframe = {
      interpType: interpType,
      time: time,
      value: value
    };
    if (interpType === InterpolationMode.CUBICSPLINE) {
      // throw "CUBICSPLINE NOT IMPLEMENTED"

      let ext: KeyframeExtras = {};
      if (extras) {
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
