import { assertValidPackageName } from '../assertions/assertValidPackageName';
import { assertValidScopedPackageName } from '../assertions/assertValidScopedPackageName';
import { isScopedPackageName } from './checks/isScopedPackageName';

export function getPackageName(packageSpecifier: string): string {
  if (isScopedPackageName(packageSpecifier)) {
    assertValidScopedPackageName(packageSpecifier);
    const packageName = packageSpecifier.split('/').slice(0, 2).join('/');
    assertValidPackageName(packageName);
    return packageSpecifier;
  }
  const packageName = packageSpecifier.split('/')[0];
  assertValidPackageName(packageName);
  return packageName;
}
