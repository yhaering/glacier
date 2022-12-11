import { getRootPath } from './getRootPath';

/**
 * Returns true if the file path is a relative or
 * absolute path to a file and not a module path.
 * @param filePath The path to check
 */
export function isFilePath(filePath: string): boolean {
  if (filePath.startsWith('.')) {
    return true;
  }
  const rootPath = getRootPath();
  return filePath.startsWith(rootPath);
}
