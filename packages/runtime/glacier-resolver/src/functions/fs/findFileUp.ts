import { findFile } from './findFile';
import { isRootPath } from './isRootPath';
import path from 'path';
import type { ExtensionList } from '../../types/ExtensionList';

/**
 * Tries to find a file in the current and all parent directories
 * until the root of the file system has been reached.
 * @param dirPath The directory to start searching in.
 * @param filename The filename without its extension
 * @param extensions All extensions that should be tried
 */
export function findFileUp(
  dirPath: string,
  filename: string,
  extensions: ExtensionList
): string | undefined {
  const filePath = findFile(dirPath, filename, extensions);
  if (filePath) {
    return filePath;
  }
  if (isRootPath(dirPath)) {
    return;
  }
  const parentDir = path.resolve(dirPath, '../');
  return findFileUp(parentDir, filename, extensions);
}
