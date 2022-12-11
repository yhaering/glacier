import { hasExtension } from '../../fs/hasExtension';
import { resolveFileWithExtension } from './resolveFileWithExtension';
import { resolveFileWithoutExtension } from './resolveFileWithoutExtension';
import type { ExtensionList } from '../../../types/ExtensionList';

export function resolveFile(
  filePath: string,
  extensions: ExtensionList
): string | undefined {
  if (hasExtension(filePath)) {
    return resolveFileWithExtension(filePath);
  }
  return resolveFileWithoutExtension(filePath, extensions);
}
