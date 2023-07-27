import type { RemoveFn } from '../../../interfaces/functions/RemoveFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertDeletableEntry } from '../assertions/assertDeletableEntry';
import { assertMemoryDirectoryLike } from '../assertions/assertMemoryDirectoryLike';
import { makeResolveFn } from './makeResolveFn';

export function makeRemoveFn(volume: MemoryVolume): RemoveFn {
  const resolve = makeResolveFn();
  return (path) => {
    const entry = getEntry(volume, path);
    assertDeletableEntry(path, entry);
    const parentPath = resolve(path, '../');
    const parentEntry = getEntry(volume, parentPath);
    assertMemoryDirectoryLike(parentPath, parentEntry);
    parentEntry.entries.delete(entry.name);
  };
}
