import type { RemoveFn } from '../../../interfaces/functions/RemoveFn';
import fs from 'fs';

export function makeRemoveFn(): RemoveFn {
  return (path) => {
    fs.rmSync(path, { force: true, recursive: true });
  };
}
