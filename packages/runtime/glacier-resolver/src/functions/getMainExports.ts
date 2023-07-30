import type { Exports } from '../interfaces/Exports';
import { PackagePathNotExported } from '../exceptions/PackagePathNotExported';
import { isPropertyOf } from './checks/isPropertyOf';

export function getMainExports(exports: Exports): Exports {
  if (
    typeof exports === 'string' ||
    Array.isArray(exports) ||
    Object.keys(exports).every((key) => !key.startsWith('.'))
  ) {
    return exports;
  } else if (typeof exports === 'object' && isPropertyOf(exports, '.')) {
    return exports['.'];
  }

  throw new PackagePathNotExported();
}
