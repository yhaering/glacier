import type { CreateDirFn } from '../../../interfaces/functions/CreateDirFn';
import fs from 'node:fs';

export function makeCreateDirFn(): CreateDirFn {
  return (path) => {
    fs.mkdirSync(path, { recursive: true });
  };
}
