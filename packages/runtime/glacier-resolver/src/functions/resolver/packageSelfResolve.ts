import { packageExportsResolve } from './packageExportsResolve';
import { readPackageJson } from './readPackageJson';
import { lookupPackageScope } from './lookupPackageScope';
import type { Optional } from '@glacier/types';
import type { ResolveConfig } from '../../types/ResolveConfig';

export function packageSelfResolve(
  packageName: string,
  packageSubpath: string,
  parentURL: string,
  config: ResolveConfig
): Optional<string> {
  const packageURL = lookupPackageScope(parentURL, config);
  if (packageURL === undefined) {
    return;
  }

  const pjson = readPackageJson(packageURL, config);
  if (
    pjson === undefined ||
    pjson.exports === null ||
    pjson.exports === undefined
  ) {
    return;
  }

  if (pjson.name === packageName) {
    return packageExportsResolve(packageURL, packageSubpath, pjson.exports, config);
  }

  return;
}
