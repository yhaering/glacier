/**
 * Returns true if the given module path is relative
 * @param modulePath
 */
export function isRelative(modulePath: string): boolean {
  return modulePath.startsWith('.');
}
