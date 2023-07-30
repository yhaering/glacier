export function isPropertyOf(obj: Object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
