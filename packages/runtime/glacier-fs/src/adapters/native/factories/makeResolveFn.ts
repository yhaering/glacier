import type { ResolveFn } from '../../../interfaces/functions/ResolveFn';
import path from 'node:path';

export function makeResolveFn(): ResolveFn {
  return (from, ...segments) => {
    return path.resolve(from, ...segments);
  };
}
