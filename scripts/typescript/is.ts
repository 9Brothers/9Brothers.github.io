import { IsAbsosuteUrl } from "./is-checkers/is-absolute-url";
import { IsDateObject } from "./is-checkers/is-date-object";
import { IsAccessorDescriptor } from "./is-checkers/is-accessor-descriptor";
import { IsArrayish } from "./is-checkers/is-arrayish";
import { IsCallable } from "./is-checkers/is-callable";
import { IsDataDescriptor } from "./is-checkers/is-data-descriptor";
import { IsDescriptor } from "./is-checkers/is-descriptor";
import { IsDotFile } from "./is-checkers/is-dotfile";
import { IsEqualShallow } from "./is-checkers/is-equal-shallow";
import { IsExtendable } from "./is-checkers/is-extendable";
import { IsExtGlob } from "./is-checkers/is-extglob";
import { NumberIsNaN } from "./dependencies/number-is-nan";
import { IsFinite } from "./is-checkers/is-finite";
import { IsFullwidthCodePoint } from "./is-checkers/is-fullwidth-code-point";
import { IsGlob } from "./is-checkers/is-glob";
import { IsNumber } from "./is-checkers/is-number";
import { IsOdd } from "./is-checkers/is-odd";
import { IsPlainObj } from "./is-checkers/is-plain-obj";
import { IsPlainObject } from "./is-checkers/is-plain-object";
import { IsPosixBracket } from "./is-checkers/is-posix-bracket";
import { IsPrimitive } from "./is-checkers/is-primitive";
import { IsProperty } from "./is-checkers/is-property";
import { IsStream } from "./is-checkers/is-stream";
import { IsSymbol } from "./is-checkers/is-symbol";
import { IsTypedArray } from "./is-checkers/is-typedarray";
import { IsUtf8 } from "./is-checkers/is-utf8";

export class Is {
  public static AbsoluteUrl(url): boolean {

    return IsAbsosuteUrl.Check(url);
  }
  
  public static Date(value): boolean {
    
    return IsDateObject.Check(value);
  }

  public static AccessorDescriptor(obj, prop, key?): boolean {

    return IsAccessorDescriptor.Check(obj, prop, key);
  }

  public static Arrayish(obj): boolean {

    return IsArrayish.Check(obj);
  }

  public static Callable(value): boolean {

    return IsCallable.Check(value);
  }

  public static DataDescriptor(obj, prop): boolean {

    return IsDataDescriptor.Check(obj, prop);
  }

  public static Descriptor(obj, key): boolean {

    return IsDescriptor.Check(obj, key);
  }

  public static Dotfile(str): boolean {

    return IsDotFile.Check(str);
  }

  public static EqualShallow(a, b): boolean {
    
    return IsEqualShallow.Check(a, b);
  }

  public static Extendable(val): boolean {
    
    return IsExtendable.Check(val);
  }

  public static Extglob(str: string): boolean {

    return IsExtGlob.Check(str);
  }

  public static Finite(val): boolean {

    return IsFinite.Check(val);
  }

  public static FullwidthCodePoint(x): boolean {

    return IsFullwidthCodePoint.Check(x);
  }

  public static Glob(str: string, options): boolean {

    return IsGlob.Check(str, options)
  }

  public static Number(num): boolean {

    return IsNumber.Check(num);
  }
  
  public static Odd(num): boolean {

    return IsOdd.Check(num);
  }

  public static NaN(x): boolean {

    return NumberIsNaN.Check(x);
  }

  public static PlainObj(x): boolean {

    return IsPlainObj.Check(x);
  }

  public static PlainObject(o): boolean {

    return IsPlainObject.Check(o);
  }

  public static PosixBracket(str: string): boolean {

    return IsPosixBracket.Check(str);
  }

  public static Primitive(value): boolean {

    return IsPrimitive.Check(value);
  }

  public static Property(str: string): boolean {

    return IsProperty.Check(str);
  }

  public static Stream(stream): boolean {

    return IsStream.Check(stream);
  }

  public static StreamWritable(stream): boolean {

    return IsStream.Writable(stream);
  }

  public static StreamReadable(stream): boolean {

    return IsStream.Readable(stream);
  }

  public static StreamDuplex(stream): boolean {

    return IsStream.Duplex(stream);
  }

  public static StreamTransform(stream): boolean {

    return IsStream.Transform(stream);
  }

  public static Symbol(value): boolean {

    return IsSymbol.Check(value)
  }

  public static TypedArray(arr): boolean {

    return IsTypedArray.Check(arr);
  }

  public static Utf8(bytes): boolean {

    return IsUtf8.Check(bytes);
  }
}