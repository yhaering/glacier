import { getPackageScope } from '../functions/getPackageScope';
import { readPackageJson } from '../functions/readPackageJson';
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
    return;
  }

  const pjson = readPackageJson(packageURL, config);
  if (!pjson || !pjson.exports) {
    return;
  }

  if (pjson.name === packageName) {
    return resolvePackageExports(
      packageURL,
      packageSubPath,
      pjson.exports,
      config
    );
  }
}
