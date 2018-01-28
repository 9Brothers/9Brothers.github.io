/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import { KindOf } from "../dependencies/kind-of";
import { IsAccessorDescriptor } from "./is-accessor-descriptor";
import { IsDataDescriptor } from "./is-data-descriptor";

export class IsDescriptor {

  public static Check(obj, key) {
    if (KindOf.Check(obj) !== 'object') {
      return false;
    }
    if ('get' in obj) {
      return IsAccessorDescriptor.Check(obj, key);
    }
    return IsDataDescriptor.Check(obj, key);
  }
}