import type { RemoveFn } from '../../../interfaces/functions/RemoveFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { join } from 'node:path';
import type { MemoryDirectoryLike } from '../interfaces/MemoryDirectoryLike';
import { EntryNotFound } from '../exceptions/EntryNotFound';

export function makeRemoveFn(volume: MemoryVolume): RemoveFn {
  return (path) => {
    const entry = getEntry(volume, path);
    if (entry === undefined) {
      throw new EntryNotFound(path);
    }
    if (entry.type === 'VOLUME') {
      throw new Error('Can not remove root of file system');
    }
    const parentEntry = getEntry(
      volume,
      join(path, '../')
    ) as MemoryDirectoryLike;
    parentEntry.entries.delete(entry.name);
  };
}
