import type { Exports } from '../interfaces/Exports';
import { isPropertyOf } from '../conditions/isPropertyOf';

export function getMainExports(exports: Exports): Exports | undefined {
  if (
    typeof exports === 'string' ||
    Array.isArray(exports) ||
    Object.keys(exports).every((key) => !key.startsWith('.'))
  ) {
    return exports;
  } else if (typeof exports === 'object' && isPropertyOf(exports, '.')) {
    return exports['.'];
  }
}
