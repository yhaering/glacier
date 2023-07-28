import { Exports } from '../interfaces/Exports';
import { InvalidPackageConfiguration } from '../exceptions/InvalidPackageConfiguration';
import { ExportConditions } from '../interfaces/ExportConditions';
import { PackagePathNotExported } from '../exceptions/PackagePathNotExported';
import { packageTargetResolve } from './packageTargetResolve';
import { packageImportsExportsResolve } from './packageImportsExportsResolve';
import { ResolverConfig } from '../interfaces/ResolverConfig';

export function packageExportsResolve(
  packageURL: string,
  subpath: string,
  exports: Exports,
  config: ResolverConfig
): string {
  if (typeof exports === 'object') {
    const hasKeyStartingWithDot = Object.keys(exports).find((key) =>
      key.startsWith('.')
    );
    const hasKeyNotStartingWithDot = Object.keys(exports).find(
      (key) => !key.startsWith('.')
    );
    if (hasKeyStartingWithDot && hasKeyNotStartingWithDot) {
      throw new InvalidPackageConfiguration();
    }
  }
  if (subpath === '.') {
    let mainExport = undefined;
    if (
      typeof exports === 'string' ||
      Array.isArray(exports) ||
      Object.keys(exports).every((key) => !key.startsWith('.'))
    ) {
      mainExport = exports;
    } else if (typeof exports === 'object' && exports['.']) {
      mainExport = exports['.'];
    }

    if (mainExport !== undefined) {
      const resolved = packageTargetResolve(
        packageURL,
        mainExport,
        undefined,
        false,
        config
      );
      if (resolved !== undefined) {
        return resolved;
      }
    }
  } else if (
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
