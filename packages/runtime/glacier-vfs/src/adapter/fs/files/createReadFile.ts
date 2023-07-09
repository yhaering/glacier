import type { VFSReadFile } from '../../../interfaces/files/VFSReadFile';
import fs from 'fs';

export function createReadFile(): VFSReadFile {
  return (path) => {
    return fs.readFileSync(path);
  };
}
