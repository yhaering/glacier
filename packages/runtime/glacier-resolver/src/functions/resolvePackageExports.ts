import type { Exports } from '../interfaces/Exports';
import type { ExportConditions } from '../interfaces/ExportConditions';
import { PackagePathNotExported } from '../exceptions/PackagePathNotExported';
import { resolveExportConditions } from './exportConditions/resolveExportConditions';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { assertValidExportDefinition } from '../assertions/assertValidExportDefinition';
import { resolveMainExport } from './resolveMainExport';

export function resolvePackageExports(
  packageURL: string,
  subpath: string,
  exports: Exports,
  config: ResolverConfig
): string {
  assertValidExportDefinition(exports);
  if (subpath === '.') {
    return resolveMainExport(packageURL, exports, config);
  }

  if (
    typeof exports === 'object' &&
    Object.keys(exports).every((key) => key.startsWith('.'))
  ) {
    const resolved = resolveExportConditions(
      subpath,
      exports as ExportConditions,
      packageURL,
      config
    );
    if (resolved !== undefined) {
      return resolved;
    }
  }

  throw new PackagePathNotExported();
}
