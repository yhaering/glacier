import fs from 'fs';
import path from 'path';
import type { ExtensionList } from '../../types/ExtensionList';

/**
 * Tries to find a file by testing the filename with all
 * given extensions inside a given directory path
 * @param dirPath The directory path to search in
 * @param filename The filename without its extension
 * @param extensions The extension to test
 */
export function findFile(
  dirPath: string,
  filename: string,
  extensions: ExtensionList
): string | undefined {
  for (const extension of extensions) {
    const resolvedPath = path.resolve(dirPath, filename + extension);
    const fileExists = fs.existsSync(resolvedPath);
    if (fileExists) {
      return resolvedPath;
    }
  }
}
