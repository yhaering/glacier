import { readPackageJson } from '../functions/readPackageJson';
import { resolveFields } from './resolveFields';
import { resolvePackageExports } from './resolvePackageExports';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolvePjson(
  packageURL: string,
  packageSubPath: string,
  config: ResolverConfig
): string | undefined {
  const { fs } = config;
  const pjson = readPackageJson(packageURL, config);
  if (pjson) {
    const mainField = resolveFields(pjson, config);
    if (pjson.exports) {
      return resolvePackageExports(
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
