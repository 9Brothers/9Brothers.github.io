export class IsStream {
  public static Check(stream) {
    return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
  }

  public static Writable(stream) {
    return this.Check(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
  }

  public static Readable = function (stream) {
    return this.Check(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
  }

  public static Duplex(stream) {
    return this.Writable(stream) && this.Readable(stream);
  }

  public static Transform(stream) {
    return this.Duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
  }
}