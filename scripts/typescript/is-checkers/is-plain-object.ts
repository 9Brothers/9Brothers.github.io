/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import { IsObject } from "./is-object";

export class IsPlainObject {
  private static ctor = null;
  private static prot = null;

  public static Check(o) {
    if (this.IsObjectObject(o) === false) return false;

    // If has modified constructor
    this.ctor = o.constructor;
    if (typeof this.ctor !== 'function') return false;

    // If has modified prototype
    this.prot = this.ctor.prototype;
    if (this.IsObjectObject(this.prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (this.prot.hasOwnProperty('isPrototypeOf') === false) {
      return false;
    }

    // Most likely a plain Object
    return true;
  }

  private static IsObjectObject(o) {
    return IsObject.Check(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
  }
}