import type { MemoryEntry } from '../interfaces/MemoryEntry';
import { assertEntryExists } from './assertEntryExists';
import type { MemoryFile } from '../interfaces/MemoryFile';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';

export function assertDeletableEntry(
  path: string,
  entry?: MemoryEntry
): asserts entry is MemoryFile | MemoryDirectory {
  assertEntryExists(path, entry);
  if (entry.type === 'VOLUME') {
    throw new TypeError(`Expected ${path} to be a file or directory`);
  }
}
