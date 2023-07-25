import type { MemoryEntry } from '../interfaces/MemoryEntry';
import { assertEntryExists } from './assertEntryExists';
import type { MemoryFile } from '../interfaces/MemoryFile';

export function assertMemoryFile(
  path: string,
  entry?: MemoryEntry
): asserts entry is MemoryFile {
  assertEntryExists(path, entry);
  if (entry.type !== 'FILE') {
    throw new TypeError(`Expected ${path} to be a file`);
  }
}
