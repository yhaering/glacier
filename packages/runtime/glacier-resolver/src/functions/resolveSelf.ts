import { getPackageScope } from './utils/getPackageScope';
import { readPackageJson } from './utils/readPackageJson';
import { resolvePackageExports } from './resolvePackageExports';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolveSelf(
  packageName: string,
  packageSubPath: string,
  parentURL: string,
  config: ResolverConfig
): string | undefined {
  const packageURL = getPackageScope(parentURL, config);
  if (!packageURL) {
    return undefined;
  }
  const pjson = readPackageJson(packageURL, config);
  if (!pjson || !pjson.exports) {
    return undefined;
  }
  if (pjson.name === packageName) {
    return resolvePackageExports(
      packageURL,
      packageSubPath,
      pjson.exports,
      config
    );
  }
  return undefined;
}
