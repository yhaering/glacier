import { lookupPackageScope } from './lookupPackageScope';
import { readPackageJson } from './readPackageJson';
import { packageExportsResolve } from './packageExportsResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function packageSelfResolve(
  packageName: string,
  packageSubpath: string,
  parentURL: string,
  config: ResolverConfig
): string | undefined {
  const packageURL = lookupPackageScope(parentURL, config);
  if (!packageURL) {
    return undefined;
  }
  const pjson = readPackageJson(packageURL, config);
  if (!pjson || !pjson.exports) {
    return undefined;
  }
  if (pjson.name === packageName) {
    return packageExportsResolve(
      packageURL,
      packageSubpath,
      pjson.exports,
      config
    );
  }
  return undefined;
}
