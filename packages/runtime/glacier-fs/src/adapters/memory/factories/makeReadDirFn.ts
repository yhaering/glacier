import type { ReadDirFn } from '../../../interfaces/functions/ReadDirFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { EntryNotFound } from '../exceptions/EntryNotFound';

export function makeReadDirFn(volume: MemoryVolume): ReadDirFn {
  return (path) => {
    const entry = getEntry(volume, path);
    if (entry === undefined) {
      throw new EntryNotFound(path);
    }
    if (entry.type === 'FILE') {
      throw new Error(`Expected a directory but got a file at ${path}`);
    }
    return new Set(entry.entries.keys());
  };
}
