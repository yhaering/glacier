import type { ParseFn } from '../../../interfaces/functions/ParseFn';
import path from 'node:path';

export function makeParseFn(): ParseFn {
  return (entryPath) => {
    return path.parse(entryPath);
  };
}
