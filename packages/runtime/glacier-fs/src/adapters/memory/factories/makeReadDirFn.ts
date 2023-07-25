import type { ReadDirFn } from '../../../interfaces/functions/ReadDirFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertMemoryDirectory } from '../assertions/assertMemoryDirectory';

export function makeReadDirFn(volume: MemoryVolume): ReadDirFn {
  return (path) => {
    const entry = getEntry(volume, path);
    assertMemoryDirectory(path, entry);
    return new Set(entry.entries.keys());
  };
}
