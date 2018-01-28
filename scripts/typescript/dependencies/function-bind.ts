export class FunctionBind {
  private static ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  private static slice = Array.prototype.slice;
  private static toStr = Object.prototype.toString;
  private static funcType = '[object Function]';

  public static Bind(that) {

    let target = this;
    if (typeof target !== 'function' || this.toStr.call(target) !== this.funcType) {
      throw new TypeError(this.ERROR_MESSAGE + target);
    }
    let args = this.slice.call(arguments, 1);

    let bound;
    let binder = function () {
      if (this instanceof bound) {
        let result = target.apply(
          this,
          args.concat(this.slice.call(arguments))
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      } else {
        return target.apply(
          that,
          args.concat(this.slice.call(arguments))
        );
      }
    };

    let boundLength = Math.max(0, target.length - args.length);
    let boundArgs = [];
    for (let i = 0; i < boundLength; i++) {
      boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
      let Empty = function Empty() { };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }

    return bound;
  }

}