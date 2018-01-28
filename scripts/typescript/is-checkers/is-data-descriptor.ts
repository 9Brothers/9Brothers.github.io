/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */


import { KindOf } from "../dependencies/kind-of";

export class IsDataDescriptor {
  private static data = {
    configurable: 'boolean',
    enumerable: 'boolean',
    writable: 'boolean'
  };
  
  public static Check(obj, prop) {
    if (KindOf.Check(obj) !== 'object') {
      return false;
    }
  
    if (KindOf.Check(prop) === 'string') {
      var val = Object.getOwnPropertyDescriptor(obj, prop);
      return KindOf.Check(val) !== 'undefined';
    }
  
    if (!('value' in obj) && !('writable' in obj)) {
      return false;
    }
  
    for (var key in obj) {
      if (key === 'value') continue;
  
      if (!this.data.hasOwnProperty(key)) {
        continue;
      }
  
      if (KindOf.Check(obj[key]) === this.data[key]) {
        continue;
      }
  
      if (KindOf.Check(obj[key]) !== 'undefined') {
        return false;
      }
    }
    return true;
  }
}