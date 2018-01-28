/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import { KindOf } from "../dependencies/kind-of";

export class IsAccessorDescriptor {
  // accessor descriptor properties
  private static accessor = {
    get: 'function',
    set: 'function',
    configurable: 'boolean',
    enumerable: 'boolean'
  };

  public static Check(obj, prop, key?): boolean {
    if (KindOf.Check(prop) === 'string') {
      let val = Object.getOwnPropertyDescriptor(obj, prop);
      return KindOf.Check(val) !== 'undefined';
    }

    if (KindOf.Check(obj) !== 'object') {
      return false;
    }

    if (this.Has(obj, 'value') || this.Has(obj, 'writable')) {
      return false;
    }

    if (!this.Has(obj, 'get') || KindOf.Check(obj.get) !== 'function') {
      return false;
    }

    // tldr: it's valid to have "set" be undefined
    // "set" might be undefined if `Object.getOwnPropertyDescriptor`
    // was used to get the value, and only `get` was defined by the user
    if (this.Has(obj, 'set') && KindOf.Check(obj[key]) !== 'function' && KindOf.Check(obj[key]) !== 'undefined') {
      return false;
    }

    for (let key in obj) {
      if (!this.accessor.hasOwnProperty(key)) {
        continue;
      }

      if (KindOf.Check(obj[key]) === this.accessor[key]) {
        continue;
      }

      if (KindOf.Check(obj[key]) !== 'undefined') {
        return false;
      }
    }
    return true;
  }

  private static Has(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
}