import { readPackageJson } from './readPackageJson';
import { resolveFields } from './resolveFields';
import { packageExportsResolve } from './packageExportsResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolvePjson(
  packageURL: string,
  packageSubPath: string,
  config: ResolverConfig
): string {
  const { fs } = config;
  const pjson = readPackageJson(packageURL, config);
  if (pjson) {
    const mainField = resolveFields(pjson, config);
    if (pjson.exports) {
      return packageExportsResolve(
        packageURL,
        packageSubPath,
        pjson.exports,
        config
      );
    } else if (packageSubPath === '.' && mainField) {
      return fs.resolve(packageURL, pjson[mainField]);
    }
  }

  return fs.resolve(packageURL, packageSubPath);
}
