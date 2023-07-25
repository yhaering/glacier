import type { ReadFileFn } from '../../../interfaces/functions/ReadFileFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertMemoryFile } from '../assertions/assertMemoryFile';

export function makeReadFileFn(volume: MemoryVolume): ReadFileFn {
  return (path) => {
    const entry = getEntry(volume, path);
    assertMemoryFile(path, entry);
    return entry.content;
  };
}
