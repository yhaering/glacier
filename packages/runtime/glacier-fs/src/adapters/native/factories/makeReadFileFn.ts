import type { ReadFileFn } from '../../../interfaces/functions/ReadFileFn';
import fs from 'node:fs';

export function makeReadFileFn(): ReadFileFn {
  return (path) => {
    return fs.readFileSync(path);
  };
}
