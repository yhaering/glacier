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
  if (!pjson) {
    return fs.resolve(packageURL, packageSubPath);
  }

  if (pjson.exports) {
    return resolvePackageExports(
      packageURL,
      packageSubPath,
      pjson.exports,
      config
    );
  }

  const mainField = resolveFields(pjson, config);
  if (packageSubPath === '.' && mainField) {
    return fs.resolve(packageURL, pjson[mainField] as string);
  }

  return fs.resolve(packageURL, packageSubPath);
}
