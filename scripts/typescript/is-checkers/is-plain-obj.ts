export class IsPlainObj {
  private static toString = Object.prototype.toString;

  public static Check(x) {
    var prototype;
    
    return this.toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
  }
}