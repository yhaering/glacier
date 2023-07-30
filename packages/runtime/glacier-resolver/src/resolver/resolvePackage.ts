import { resolveSelf } from './resolveSelf';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { getPackageName } from '../functions/getPackageName';
import { assertNoEmptyString } from '../assertions/assertNoEmptyString';
import { assertNoTrailingSlash } from '../assertions/assertNoTrailingSlash';
import { resolveModule } from './resolveModule';

export function resolvePackage(
  packageSpecifier: string,
  parentURL: string,
  config: ResolverConfig
): string | undefined {
  assertNoEmptyString(packageSpecifier);
  if (packageSpecifier.startsWith('node:')) {
    return packageSpecifier;
  }
  const packageName = getPackageName(packageSpecifier);
  const packageSubPath = `.${packageSpecifier.slice(packageName.length)}`;
  assertNoTrailingSlash(packageSubPath);
  const selfUrl = resolveSelf(packageName, packageSubPath, parentURL, config);
  if (selfUrl) {
    return selfUrl;
  }

  return resolveModule(parentURL, packageName, packageSubPath, config);
}
