import { assertValidPackageName } from '../assertions/assertValidPackageName';
import { assertValidScopedPackageName } from '../assertions/assertValidScopedPackageName';

export function getPackageName(packageSpecifier: string): string {
  if (packageSpecifier.startsWith('@')) {
    assertValidScopedPackageName(packageSpecifier);
    const packageName = packageSpecifier.split('/').slice(0, 2).join('/');
    assertValidPackageName(packageName);
    return packageSpecifier;
  }
  const packageName = packageSpecifier.split('/')[0];
  assertValidPackageName(packageName);
  return packageName;
}
