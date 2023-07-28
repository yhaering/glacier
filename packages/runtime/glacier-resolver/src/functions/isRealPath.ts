export function isRealPath(url: string): boolean {
  return url.startsWith('/') || url.startsWith('./') || url.startsWith('../');
}
