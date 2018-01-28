export class IsPrimitive {
  
  public static Check(value) {
    return value == null || (typeof value !== 'function' && typeof value !== 'object');
  }
}