import { PackageImportNotDefined } from '../exceptions/PackageImportNotDefined';
import { lookupPackageScope } from './lookupPackageScope';
import { readPackageJson } from './readPackageJson';
import { packageImportsExportsResolve } from './packageImportsExportsResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { assertValidImportSpecifier } from '../assertions/assertValidImportSpecifier';

export function packageImportsResolve(
  specifier: string,
  parentURL: string,
  config: ResolverConfig
): string {
  assertValidImportSpecifier(specifier);
  const packageURL = lookupPackageScope(parentURL, config);

  if (packageURL === undefined) {
    throw new PackageImportNotDefined();
  }

  const pjson = readPackageJson(packageURL, config);
  if (pjson?.imports) {
    const resolved = packageImportsExportsResolve(
      specifier,
      pjson.imports,
      packageURL,
      true,
      config
    );
    if (resolved !== undefined) {
      return resolved;
    }
  }

  throw new PackageImportNotDefined();
}
