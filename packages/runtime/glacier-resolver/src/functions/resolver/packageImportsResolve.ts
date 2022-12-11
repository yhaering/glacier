import { readPackageJson } from './readPackageJson';
import { lookupPackageScope } from './lookupPackageScope';
import { packageImportsExportsResolve } from './packageImportsExportsResolve';
import type { ResolveConfig } from '../../types/ResolveConfig';

export function packageImportsResolve(
  specifier: string,
  parentURL: string,
  config: ResolveConfig
): string {
  // Assert: specifier begins with "#".
  if (!specifier.startsWith('#')) {
    throw new Error("AssertionError: specifier does not begin with '#'");
  }

  // If specifier is exactly equal to "#" or starts with "#/", then
  if (specifier === '#' || specifier.startsWith('#/')) {
    // Throw an Invalid Module Specifier error.
    throw new Error('Invalid Module Specifier');
  }

  // Let packageURL be the result of LOOKUP_PACKAGE_SCOPE(parentURL).
  const packageURL = lookupPackageScope(parentURL, config);

  // If packageURL is not null, then
  if (packageURL) {
    // Let pjson be the result of READ_PACKAGE_JSON(packageURL).
    const pjson = readPackageJson(packageURL, config);

    // If pjson.imports is a non-null Object, then
    if (pjson && pjson.imports && typeof pjson.imports === 'object') {
      // Let resolved be the result of
      // PACKAGE_IMPORTS_EXPORTS_RESOLVE(
      // specifier, pjson.imports, packageURL, true).
      const resolved = packageImportsExportsResolve(
        specifier,
        pjson.imports,
        packageURL,
        true,
        config
      );

      // If resolved is not null or undefined, return resolved.
      if (resolved !== null && resolved !== undefined) {
        return resolved;
      }
    }
  }

  // Throw a Package Import Not Defined error.
  throw new Error('Package Import Not Defined');
}
