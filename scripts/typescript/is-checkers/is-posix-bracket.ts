/*!
 * is-posix-bracket <https://github.com/jonschlinkert/is-posix-bracket>
 *
 * Copyright (c) 2015-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

export class IsPosixBracket {
  
  public static Check(str: string) {

    return typeof str === 'string' && /\[([:.=+])(?:[^\[\]]|)+\1\]/.test(str);
  }
}