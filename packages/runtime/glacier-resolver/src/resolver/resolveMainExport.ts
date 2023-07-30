import { resolvePackageTarget } from './exportConditions/resolvePackageTarget';
import type { Exports } from '../interfaces/Exports';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { getMainExports } from '../functions/getMainExports';

export function resolveMainExport(
  packageURL: string,
  exports: Exports,
  config: ResolverConfig
) {
  const mainExport = getMainExports(exports);
  if (!mainExport) {
    return;
  }
  return resolvePackageTarget(packageURL, mainExport, undefined, config);
}
