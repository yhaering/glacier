import type { ReadFileFn } from '../../../interfaces/functions/ReadFileFn';
import fs from 'fs';

export function makeReadFileFn(): ReadFileFn {
  return (path) => {
    return fs.readFileSync(path);
  };
}
