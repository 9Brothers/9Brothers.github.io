/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import { IsNumber } from "./is-number";

export class IsOdd {
  public static Check(i) {
    if (!IsNumber.Check(i)) {
      throw new TypeError('is-odd expects a number.');
    }
    if (Number(i) !== Math.floor(i)) {
      throw new RangeError('is-odd expects an integer.');
    }
    return !!(~~i & 1);
  }
}