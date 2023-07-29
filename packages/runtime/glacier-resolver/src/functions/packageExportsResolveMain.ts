import { packageTargetResolve } from './packageTargetResolve';
import { PackagePathNotExported } from '../exceptions/PackagePathNotExported';
import type { Exports } from '../interfaces/Exports';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { getMainExports } from './getMainExports';

export function packageExportsResolveMain(
  packageURL: string,
  exports: Exports,
  config: ResolverConfig
) {
  const mainExport = getMainExports(exports);
  const resolved = packageTargetResolve(
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
