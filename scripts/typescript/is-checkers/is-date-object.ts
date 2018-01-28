export class IsDateObject {
  private static GetDay: () => number = Date.prototype.getDay;
  private static toStr = Object.prototype.toString;
  private static dateClass = '[object Date]';
  private static hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  public static Check(value) {
    if (typeof value !== 'object' || value === null) { return false; }
    return this.hasToStringTag ? this.TryDateObject(value) : this.toStr.call(value) === this.dateClass;
  }

  private static TryDateObject(value) {
    try {
      this.GetDay.call(value);
      return true;
    } catch (e) {
      return false;
    }
  }
}