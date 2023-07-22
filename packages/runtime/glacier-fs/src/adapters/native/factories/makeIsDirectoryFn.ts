import type { IsDirectoryFn } from '../../../interfaces/functions/IsDirectoryFn';
import fs from 'fs';

export function makeIsDirectoryFn(): IsDirectoryFn {
  return (path) => {
    const stats = fs.statSync(path);
    return stats.isDirectory();
  };
}
