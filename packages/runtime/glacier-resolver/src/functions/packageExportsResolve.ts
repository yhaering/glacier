import type { Exports } from '../interfaces/Exports';
import type { ExportConditions } from '../interfaces/ExportConditions';
import { PackagePathNotExported } from '../exceptions/PackagePathNotExported';
import { packageImportsExportsResolve } from './packageImportsExportsResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { assertValidExportDefinition } from '../assertions/assertValidExportDefinition';
import { packageExportsResolveMain } from './packageExportsResolveMain';

export function packageExportsResolve(
  packageURL: string,
  subpath: string,
  exports: Exports,
  config: ResolverConfig
): string {
  assertValidExportDefinition(exports);
  if (subpath === '.') {
    return packageExportsResolveMain(packageURL, exports, config);
  }

  if (
    typeof exports === 'object' &&
    Object.keys(exports).every((key) => key.startsWith('.'))
  ) {
    const resolved = packageImportsExportsResolve(
      subpath,
      exports as ExportConditions,
      packageURL,
      false,
      config
    );
    if (resolved !== undefined) {
      return resolved;
    }
  }

  throw new PackagePathNotExported();
}
