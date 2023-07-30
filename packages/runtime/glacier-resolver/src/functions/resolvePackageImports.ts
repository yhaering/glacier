import { PackageImportNotDefined } from '../exceptions/PackageImportNotDefined';
import { getPackageScope } from './utils/getPackageScope';
import { readPackageJson } from './utils/readPackageJson';
import { resolveExportConditions } from './exportConditions/resolveExportConditions';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { assertValidImportSpecifier } from '../assertions/assertValidImportSpecifier';
import { NoPackageScope } from '../exceptions/NoPackageScope';
import { NoImportDefinitions } from '../exceptions/NoImportDefinitions';

export function resolvePackageImports(
  specifier: string,
  parentURL: string,
  config: ResolverConfig
): string {
  assertValidImportSpecifier(specifier);
  const packageURL = getPackageScope(parentURL, config);
  if (packageURL === undefined) {
    throw new NoPackageScope();
  }

  const pjson = readPackageJson(packageURL, config);
  if (!pjson) {
    throw new NoPackageScope();
  }

  if (!pjson.imports) {
    throw new NoImportDefinitions();
  }

  const resolved = resolveExportConditions(
    specifier,
    pjson.imports,
    packageURL,
    config
  );
  if (!resolved) {
    throw new PackageImportNotDefined();
  }

  return resolved;
}
