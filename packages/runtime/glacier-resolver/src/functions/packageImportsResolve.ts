import { PackageImportNotDefined } from '../exceptions/PackageImportNotDefined';
import { lookupPackageScope } from './lookupPackageScope';
import { readPackageJson } from './readPackageJson';
import { packageImportsExportsResolve } from './packageImportsExportsResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { assertValidImportSpecifier } from '../assertions/assertValidImportSpecifier';
import { NoPackageScope } from '../exceptions/NoPackageScope';
import { NoImportDefinitions } from '../exceptions/NoImportDefinitions';

export function packageImportsResolve(
  specifier: string,
  parentURL: string,
  config: ResolverConfig
): string {
  assertValidImportSpecifier(specifier);
  const packageURL = lookupPackageScope(parentURL, config);
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

  const resolved = packageImportsExportsResolve(
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
