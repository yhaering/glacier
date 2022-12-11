import path from 'path';
import { findFile } from '../../fs/findFile';
import type { ExtensionList } from '../../../types/ExtensionList';

export function resolveFileWithoutExtension(
  filePath: string,
  extensions: ExtensionList
): string | undefined {
  const dirname = path.dirname(filePath);
  const basename = path.basename(filePath);
  return findFile(dirname, basename, extensions);
}
