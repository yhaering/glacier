import { resolvePackageTarget } from './exportConditions/resolvePackageTarget';
import { PackagePathNotExported } from '../exceptions/PackagePathNotExported';
import type { Exports } from '../interfaces/Exports';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { getMainExports } from './utils/getMainExports';

export function resolveMainExport(
  packageURL: string,
  exports: Exports,
  config: ResolverConfig
) {
  const mainExport = getMainExports(exports);
  const resolved = resolvePackageTarget(
    packageURL,
    mainExport,
    undefined,
    config
  );

  if (resolved === undefined) {
    throw new PackagePathNotExported();
  }

  return resolved;
}
