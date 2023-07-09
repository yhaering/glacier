import type { VFSHasDir } from '../../../interfaces/dirs/VFSHasDir';
import fs from 'fs';

export function createHasDir(): VFSHasDir {
  return (path) => {
    return fs.existsSync(path);
  };
}
