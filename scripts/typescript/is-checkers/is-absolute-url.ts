export class IsAbsosuteUrl {
  public static Check(url: string): boolean {
    
    return /^[a-z][a-z0-9+.-]*:/.test(url);
  }
}