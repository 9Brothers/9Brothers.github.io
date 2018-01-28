/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

import { KindOf } from "../dependencies/kind-of";

export class IsNumber {

  public static Check(num) {

    let type = KindOf.Check(num);

    if (type !== 'number' && type !== 'string') {
      return false;
    }

    let n = +num;

    return (n - n + 1) >= 0 && num !== '';
  }
}