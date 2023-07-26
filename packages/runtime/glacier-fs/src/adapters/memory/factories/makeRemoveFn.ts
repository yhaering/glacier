import type { RemoveFn } from '../../../interfaces/functions/RemoveFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { join } from 'node:path';
import { assertDeletableEntry } from '../assertions/assertDeletableEntry';
import { assertMemoryDirectoryLike } from '../assertions/assertMemoryDirectoryLike';

export function makeRemoveFn(volume: MemoryVolume): RemoveFn {
  return (path) => {
    const entry = getEntry(volume, path);
    assertDeletableEntry(path, entry);
    const parentPath = join(path, '../');
    const parentEntry = getEntry(volume, parentPath);
    assertMemoryDirectoryLike(parentPath, parentEntry);
    parentEntry.entries.delete(entry.name);
  };
}
