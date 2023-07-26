import type { RelativeFn } from '../../../interfaces/functions/RelativeFn';
import path from 'node:path';

export function makeRelativeFn(): RelativeFn {
  return (from, to) => {
    return path.relative(from, to);
  };
}
