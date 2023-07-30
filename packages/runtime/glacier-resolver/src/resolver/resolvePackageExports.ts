import type { Exports } from '../interfaces/Exports';
import type { ExportConditions } from '../interfaces/ExportConditions';
import { resolveExportConditions } from './exportConditions/resolveExportConditions';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { resolveMainExport } from './resolveMainExport';

export function resolvePackageExports(
  packageURL: string,
  subpath: string,
  exports: Exports,
  config: ResolverConfig
): string | undefined {
  if (subpath === '.') {
    return resolveMainExport(packageURL, exports, config);
  }

  if (
    typeof exports === 'object' &&
    Object.keys(exports).every((key) => key.startsWith('.'))
  ) {
    return resolveExportConditions(
      subpath,
      exports as ExportConditions,
      packageURL,
      config
    );
  }
}
