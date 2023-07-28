import { packageSelfResolve } from './packageSelfResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { getPackageName } from './getPackageName';
import { assertNoEmptyString } from '../assertions/assertNoEmptyString';
import { assertNoTrailingSlash } from '../assertions/assertNoTrailingSlash';
import { moduleResolve } from './moduleResolve';

export function packageResolve(
  packageSpecifier: string,
  parentURL: string,
  config: ResolverConfig
): string {
  assertNoEmptyString(packageSpecifier);
  if (packageSpecifier.startsWith('node:')) {
    return packageSpecifier;
  }
  const packageName = getPackageName(packageSpecifier);
  const packageSubPath = `.${packageSpecifier.slice(packageName.length)}`;
  assertNoTrailingSlash(packageSubPath);
  const selfUrl = packageSelfResolve(
    packageName,
    packageSubPath,
    parentURL,
    config
  );
  if (selfUrl) {
    return selfUrl;
  }

  return moduleResolve(parentURL, packageName, packageSubPath, config);
}
