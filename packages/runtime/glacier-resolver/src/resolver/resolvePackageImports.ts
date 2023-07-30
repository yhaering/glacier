import { getPackageScope } from '../functions/getPackageScope';
import { readPackageJson } from '../functions/readPackageJson';
import { resolveExportConditions } from './exportConditions/resolveExportConditions';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { assertValidImportSpecifier } from '../assertions/assertValidImportSpecifier';

export function resolvePackageImports(
  specifier: string,
  parentURL: string,
  config: ResolverConfig
): string | undefined {
  assertValidImportSpecifier(specifier);
  const packageURL = getPackageScope(parentURL, config);
  if (packageURL === undefined) {
    return;
  }

  const pjson = readPackageJson(packageURL, config);
  if (!pjson) {
    return;
  }

  if (!pjson.imports) {
    return;
  }

  return resolveExportConditions(specifier, pjson.imports, packageURL, config);
}
