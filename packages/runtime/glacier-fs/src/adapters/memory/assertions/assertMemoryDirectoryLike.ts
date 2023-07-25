import type { MemoryEntry } from '../interfaces/MemoryEntry';
import { assertEntryExists } from './assertEntryExists';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import type { MemoryVolume } from '../interfaces/MemoryVolume';

export function assertMemoryDirectoryLike(
  path: string,
  entry?: MemoryEntry
): asserts entry is MemoryVolume | MemoryDirectory {
  assertEntryExists(path, entry);
  if (entry.type !== 'VOLUME' && entry.type !== 'DIRECTORY') {
    throw new TypeError(`Expected ${path} to be a volume or directory`);
  }
}
