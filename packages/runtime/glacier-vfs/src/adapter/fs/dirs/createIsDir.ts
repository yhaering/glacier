import type { VFSIsDir } from '../../../interfaces/dirs/VFSIsDir';
import fs from 'fs';

export function createIsDir(): VFSIsDir {
  return (path) => {
    const stats = fs.statSync(path);
    return stats.isDirectory();
  };
}
