import type { VFSCreateDir } from '../../../interfaces/dirs/VFSCreateDir';
import fs from 'fs';

export function createCreateDir(): VFSCreateDir {
  return (path) => {
    fs.mkdirSync(path, { recursive: true });
  };
}
