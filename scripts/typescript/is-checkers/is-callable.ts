export class IsCallable {
  private static fnToStr = Function.prototype.toString;
  private static constructorRegex = /^\s*class /;

  private static toStr = Object.prototype.toString;
  private static fnClass = '[object Function]';
  private static genClass = '[object GeneratorFunction]';
  private static hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  public static Check(value) {
    if (!value) { return false; }
    if (typeof value !== 'function' && typeof value !== 'object') { return false; }
    if (this.hasToStringTag) { return this.TryFunctionObject(value); }
    if (this.IsES6ClassFn(value)) { return false; }
    var strClass = this.toStr.call(value);
    return strClass === this.fnClass || strClass === this.genClass;
  }

  private static IsES6ClassFn(value) {
    try {
      var fnStr = this.fnToStr.call(value);
      var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
      var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
      var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
      return this.constructorRegex.test(spaceStripped);
    } catch (e) {
      return false; // not a function
    }
  }

  private static TryFunctionObject(value) {
    try {
      if (this.IsES6ClassFn(value)) { return false; }
      this.fnToStr.call(value);
      return true;
    } catch (e) {
      return false;
    }
  }
}