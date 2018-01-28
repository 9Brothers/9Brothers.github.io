/*!
 * is-dotfile <https://github.com/jonschlinkert/is-dotfile>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

export class IsDotFile {
  public static Check(str) {
    if (str.charCodeAt(0) === 46 /* . */ && str.indexOf('/', 1) === -1) {
      return true;
    }
    let slash = str.lastIndexOf('/');
    return slash !== -1 ? str.charCodeAt(slash + 1) === 46  /* . */ : false;
  }
}