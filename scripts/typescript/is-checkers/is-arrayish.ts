export class IsArrayish {

  public static Check(obj) {
    if (!obj) {
      return false;
    }

    return obj instanceof Array || Array.isArray(obj) ||
      (obj.length >= 0 && obj.splice instanceof Function);
  }
}