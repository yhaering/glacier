import type { VFSGetFileSize } from '../../../interfaces/files/VFSGetFileSize';
import fs from 'fs';

export function createGetFileSize(): VFSGetFileSize {
  return (path) => {
    const stats = fs.statSync(path);
    return stats.size;
  };
}
