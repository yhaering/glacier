import { basename } from 'path';

/**
 * Returns true if the given path is a file
 * @param modulePath
 */
export function isFile(modulePath: string): boolean {
  return basename(modulePath).indexOf('.') > -1;
}
