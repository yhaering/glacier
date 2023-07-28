export function assertValidScopedPackageName(packageName: string) {
  if (!packageName.includes('/')) {
    throw new Error(`Scoped package name ${packageName} should include a /`);
  }
}
