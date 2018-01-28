/*!
 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

import { IsPrimitive } from "./is-primitive";

export class IsEqualShallow {

  public static Check(a, b) {
    if (!a && !b) { return true; }
    if (!a && b || a && !b) { return false; }

    var numKeysA = 0, numKeysB = 0, key;
    for (key in b) {
      numKeysB++;
      if (!IsPrimitive.Check(b[key]) || !a.hasOwnProperty(key) || (a[key] !== b[key])) {
        return false;
      }
    }
    for (key in a) {
      numKeysA++;
    }
    return numKeysA === numKeysB;
  }
}