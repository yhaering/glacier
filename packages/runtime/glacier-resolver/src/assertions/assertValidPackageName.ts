export function assertValidPackageName(packageName: string) {
  if (packageName.startsWith('.')) {
    throw new Error(`Package ${packageName} should not start with a dot`);
  }

  if (packageName.includes('\\')) {
    throw new Error(`Package ${packageName} should not contain back slashes`);
  }

  if (packageName.includes('%')) {
    throw new Error(
      `Package ${packageName} should not contain percentage signs`
    );
  }
}
