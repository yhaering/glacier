import { isRootPath } from '../../../fs/isRootPath';
import path from 'path';
import fs from 'fs';

export function findModule(
  dirPath: string,
  module: string
): string | undefined {
  const modulePath = path.resolve(dirPath, 'node_modules', module);
  if (fs.existsSync(modulePath)) {
    return modulePath;
  }
  if (isRootPath(dirPath)) {
    return;
  }
  const parentDir = path.resolve(dirPath, '../');
  return findModule(parentDir, module);
}
