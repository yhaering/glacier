import type { ReadDirFn } from '../../../interfaces/functions/ReadDirFn';
import fs from 'node:fs';

export function makeReadDirFn(): ReadDirFn {
  return (path) => {
    const entries = fs.readdirSync(path);
    return new Set(entries);
  };
}
