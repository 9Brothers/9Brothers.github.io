import { FunctionBind } from "../dependencies/function-bind";

export class IsRegex {
  
  private static regexExec = RegExp.prototype.exec;
  private static gOPD = Object.getOwnPropertyDescriptor;
  private static toStr = Object.prototype.toString;
  private static regexClass = '[object RegExp]';
  private static hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  private static has = FunctionBind.Bind.call;

  public static Check(value) {
    
    if (!value || typeof value !== 'object') {
      return false;
    }

    if (!this.hasToStringTag) {
      return this.toStr.call(value) === this.regexClass;
    }
  
    var descriptor = this.gOPD(value, 'lastIndex');
    var hasLastIndexDataProperty = descriptor && this.has(descriptor, 'value');

    if (!hasLastIndexDataProperty) {
      return false;
    }
  
    return this.TryRegexExecCall(value);
  }

  private static TryRegexExecCall(value) {
    try {
      var lastIndex = value.lastIndex;
      value.lastIndex = 0;
  
      this.regexExec.call(value);

      return true;
    } catch (e) {
      return false;
    } finally {
      value.lastIndex = lastIndex;
    }
  }


}