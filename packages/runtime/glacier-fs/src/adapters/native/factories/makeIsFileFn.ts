import type { IsDirectoryFn } from '../../../interfaces/functions/IsDirectoryFn';
import fs from 'fs';

export function makeIsFileFn(): IsDirectoryFn {
  return (path) => {
    const stats = fs.statSync(path);
    return stats.isFile();
  };
}
