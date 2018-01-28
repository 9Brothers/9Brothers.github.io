import { NumberIsNaN } from "../dependencies/number-is-nan";

export class IsFinite {
  
  public static Check(val) {
    
    return !(typeof val !== 'number' || NumberIsNaN.Check(val) || val === Infinity || val === -Infinity);
  }
}