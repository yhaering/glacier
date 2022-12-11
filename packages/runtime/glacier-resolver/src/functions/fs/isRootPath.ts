import { getRootPath } from './getRootPath';

/**
 * Returns true if the given path equals the
 * root path of the file system
 * @param path The path that should be checked
 */
export function isRootPath(path: string): boolean {
  const rootPath = getRootPath();
  return rootPath === path;
}
