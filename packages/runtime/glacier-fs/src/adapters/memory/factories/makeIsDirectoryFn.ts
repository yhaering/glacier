import type { IsDirectoryFn } from '../../../interfaces/functions/IsDirectoryFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { EntryNotFound } from '../exceptions/EntryNotFound';

export function makeIsDirectoryFn(volume: MemoryVolume): IsDirectoryFn {
  return (path) => {
    const entry = getEntry(volume, path);
    if (entry === undefined) {
      throw new EntryNotFound(path);
    }
    return entry.type === 'DIRECTORY';
  };
}
