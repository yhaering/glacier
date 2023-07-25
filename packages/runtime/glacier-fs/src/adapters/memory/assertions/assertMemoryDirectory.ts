import type { MemoryEntry } from '../interfaces/MemoryEntry';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import { assertEntryExists } from './assertEntryExists';

export function assertMemoryDirectory(
  path: string,
  entry?: MemoryEntry
): asserts entry is MemoryDirectory {
  assertEntryExists(path, entry);
  if (entry.type !== 'DIRECTORY') {
    throw new TypeError(`Expected ${path} to be a directory`);
  }
}
