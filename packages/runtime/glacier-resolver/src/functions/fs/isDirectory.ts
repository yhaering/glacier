import fs from 'fs';

/**
 * Returns true if the given path is a directory or
 * false if it does not exist or is not a directory.
 * @param dirPath The directory path to check.
 */
export function isDirectory(dirPath: string): boolean {
  if (!fs.existsSync(dirPath)) {
    return false;
  }
  const lstat = fs.lstatSync(dirPath);
  return lstat.isDirectory();
}
