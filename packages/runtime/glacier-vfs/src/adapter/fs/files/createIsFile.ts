import type { VFSIsFile } from '../../../interfaces/files/VFSIsFile';
import fs from 'fs';

export function createIsFile(): VFSIsFile {
  return (path) => {
    const stats = fs.statSync(path);
    return stats.isFile();
  };
}
