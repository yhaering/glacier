import { existsSync } from 'fs';
/**
 * Tries to find a file with one of the extensions
 * @param modulePath The module import path
 * @param extensions A list of allowed extensions
 */
export function findFile(modulePath: string, extensions: string[]): string | undefined {
  for (const extension of extensions) {
    const fullModulePath = `${modulePath}.${extension}`;
    if (existsSync(fullModulePath)) {
      return fullModulePath;
    }
  }
}
