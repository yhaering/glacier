import { getRootPath } from './getRootPath';

export function isRootPath(path: string): boolean {
  const rootPath = getRootPath(path);
  return rootPath === path;
}
