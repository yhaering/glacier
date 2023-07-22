import type { CreateDirFn } from '../../../interfaces/functions/CreateDirFn';
import fs from 'fs';

export function makeCreateDirFn(): CreateDirFn {
  return (path) => {
    fs.mkdirSync(path, { recursive: true });
  };
}
