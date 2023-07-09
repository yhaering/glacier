import type { VFSHasFile } from '../../../interfaces/files/VFSHasFile';
import fs from 'fs';

export function createHasFile(): VFSHasFile {
  return (path) => {
    return fs.existsSync(path);
  };
}
