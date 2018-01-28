/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

export class IsExtendable {
  public static Check(val) {
    return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
  }
}