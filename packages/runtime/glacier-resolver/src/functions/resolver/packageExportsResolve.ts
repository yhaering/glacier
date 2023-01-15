import type { Exports } from '@glacier/types';
import { packageImportsExportsResolve } from './packageImportsExportsResolve';
import { packageTargetResolve } from './packageTargetResolve';
import type { ResolveConfig } from '../../types/ResolveConfig';

export function packageExportsResolve(
  packageURL: string,
  subpath: string,
  exports: Exports,
  config: ResolveConfig
): string {
  // If exports is an object with both a key starting with "." and a key not
  // starting with ".", throw an Invalid Package Configuration error.
  if (exports && typeof exports === 'object') {
    const keys = Object.keys(exports);
    const hasDotKey = keys.some((key) => key.startsWith('.'));
    const hasNonDotKey = keys.some((key) => !key.startsWith('.'));
    if (hasDotKey && hasNonDotKey) {
      throw new Error('Invalid Package Configuration');
    }
  }

  // If subpath is equal to ".", then
  if (subpath === '.') {
    // Let mainExport be undefined.
    let mainExport;

    // If exports is a String or Array, or an Object containing no keys
    // starting with ".", then
    if (
      typeof exports === 'string' ||
      Array.isArray(exports) ||
      (exports &&
        typeof exports === 'object' &&
        !Object.keys(exports).some((key) => key.startsWith('.')))
    ) {
      // Set mainExport to exports.
      mainExport = exports;
    }
    // Otherwise if exports is an Object containing a "." property, then
    else if (
      exports &&
      typeof exports === 'object' &&
      exports.hasOwnProperty('.')
    ) {
      // Set mainExport to exports["."].
      mainExport = exports['.'];
    }

    // If mainExport is not undefined, then
    if (mainExport !== undefined) {
      // Let resolved be the result of PACKAGE_TARGET_RESOLVE(
      // packageURL, mainExport, null, false).
      const resolved = packageTargetResolve(
        packageURL,
        mainExport,
        null,
        false,
        config
      );

      // If resolved is not null or undefined, return resolved.
      if (resolved !== null && resolved !== undefined) {
        return resolved;
      }
    }
  }
  // Otherwise, if exports is an Object and all keys of exports start with
  // ".", then
  else if (
    exports &&
    typeof exports === 'object' &&
    Object.keys(exports).every((key) => key.startsWith('.'))
  ) {
    // Let matchKey be the string "./" concatenated with subpath.
    const matchKey = subpath;

    // Let resolved be the result of PACKAGE_IMPORTS_EXPORTS_RESOLVE(
    // matchKey, exports, packageURL, false).
    const resolved = packageImportsExportsResolve(
      matchKey,
      exports as { [path: string]: Exports },
      packageURL,
      false,
      config
    );

    // If resolved is not null or undefined, return resolved.
    if (resolved !== null && resolved !== undefined) {
      return resolved;
    }
  }

  // Throw a Package Path Not Exported error.
  throw new Error('Package Path Not Exported');
}
