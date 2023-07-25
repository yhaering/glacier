import type { IsDirectoryFn } from '../../../interfaces/functions/IsDirectoryFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { assertEntryExists } from '../assertions/assertEntryExists';

export function makeIsDirectoryFn(volume: MemoryVolume): IsDirectoryFn {
  return (path) => {
    const entry = getEntry(volume, path);
    assertEntryExists(path, entry);
    return entry.type === 'DIRECTORY';
  };
}
