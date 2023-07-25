import type { RemoveFn } from '../../../interfaces/functions/RemoveFn';
import fs from 'node:fs';

export function makeRemoveFn(): RemoveFn {
  return (path) => {
    fs.rmSync(path, { force: true, recursive: true });
  };
}
