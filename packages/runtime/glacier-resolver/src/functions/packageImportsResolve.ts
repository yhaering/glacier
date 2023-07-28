import { InvalidModuleSpecifier } from '../exceptions/InvalidModuleSpecifier';
import { PackageImportNotDefined } from '../exceptions/PackageImportNotDefined';
import { lookupPackageScope } from './lookupPackageScope';
import { readPackageJson } from './readPackageJson';
import { packageImportsExportsResolve } from './packageImportsExportsResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function packageImportsResolve(
  specifier: string,
  parentURL: string,
  config: ResolverConfig
): string {
  if (!specifier.startsWith('#')) {
    throw new Error('Specifier should start with #');
  }
  if (specifier === '#' || specifier.startsWith('#/')) {
    throw new InvalidModuleSpecifier();
  }
  const packageURL = lookupPackageScope(parentURL, config);
  if (packageURL !== undefined) {
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
  }

  throw new PackageImportNotDefined();
}
