export function isScopedPackageName(packageSpecifier: string): boolean {
  return packageSpecifier.startsWith('@');
}
