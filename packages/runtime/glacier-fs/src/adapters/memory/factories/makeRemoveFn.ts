import type { RemoveFn } from '../../../interfaces/functions/RemoveFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { join } from 'node:path';
import type { MemoryDirectoryLike } from '../interfaces/MemoryDirectoryLike';
import { assertNotRootPath } from '../assertions/assertNotRootPath';
import { assertNotMemoryVolume } from '../assertions/assertNotMemoryVolume';

export function makeRemoveFn(volume: MemoryVolume): RemoveFn {
  return (path) => {
    assertNotRootPath(path);
    const entry = getEntry(volume, path);
    assertNotMemoryVolume(path, entry);
    const parentEntry = getEntry(
      volume,
      join(path, '../')
    ) as MemoryDirectoryLike;
    parentEntry.entries.delete(entry.name);
  };
}
