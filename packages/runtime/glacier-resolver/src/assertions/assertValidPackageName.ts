export function assertValidPackageName(packageName: string) {
  if (
    packageName.startsWith('.') ||
    packageName.includes('\\') ||
    packageName.includes('%')
  ) {
    throw new Error(`Invalid package name ${packageName}`);
  }
}
