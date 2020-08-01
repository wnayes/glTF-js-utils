import { InterpolationMode, Transformation } from "./types";

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
  public path: Transformation;
  public name = "";

  public constructor(path: Transformation, name = "") {
    this.path = path;
    this.name = name;
  }

  public addKeyframe(time: number, value: number[], interpType: InterpolationMode, extras?: KeyframeExtras): void {
    console.assert(value.length >= 3);

    const kf: Keyframe = {
      interpType,
      time,
      value,
    };

    if (interpType === InterpolationMode.CUBICSPLINE) {
      const ext: KeyframeExtras = {};
      if (extras) {
        if (extras.inTangent) ext.inTangent = extras.inTangent;
        if (extras.inTangentWeight) ext.inTangentWeight = extras.inTangentWeight;
        if (extras.outTangent) ext.outTangent = extras.outTangent;
        if (extras.outTangentWeight) ext.outTangentWeight = extras.outTangentWeight;
      }

      if (Object.keys(ext).length > 0) {
        kf.extras = ext;
      }
    }

    this.keyframes.push(kf);
  }
}
