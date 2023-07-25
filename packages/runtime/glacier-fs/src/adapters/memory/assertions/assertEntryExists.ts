import type { MemoryEntry } from '../interfaces/MemoryEntry';

export function assertEntryExists(
  path: string,
  entry?: MemoryEntry
): asserts entry is MemoryEntry {
  if (entry === undefined) {
    throw new TypeError(`Expected entry at ${path} to exist`);
  }
}
