/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import { IsExtGlob } from "./is-extglob";

export class IsGlob {
  private static chars = { '{': '}', '(': ')', '[': ']'};

  public static Check(str: string, options) {
    
    if (IsExtGlob.Check(str)) {
      return true;
    }
  
    var regex = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
    var match;
  
    // optionally relax regex
    if (options && options.strict === false) {
      regex = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;
    }
  
    while ((match = regex.exec(str))) {
      if (match[2]) return true;
      var idx = match.index + match[0].length;
  
      // if an open bracket/brace/paren is escaped,
      // set the index to the next closing character
      var open = match[1];
      var close = open ? this.chars[open] : null;
      if (open && close) {
        var n = str.indexOf(close, idx);
        if (n !== -1) {
          idx = n + 1;
        }
      }
  
      str = str.slice(idx);
    }
    return false;
  }
}