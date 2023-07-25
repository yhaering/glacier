import type { ReadFileFn } from '../../../interfaces/functions/ReadFileFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { EntryNotFound } from '../exceptions/EntryNotFound';

export function makeReadFileFn(volume: MemoryVolume): ReadFileFn {
  return (path) => {
    const entry = getEntry(volume, path);
    if (entry === undefined) {
      throw new EntryNotFound(path);
    }
    if (entry.type === 'DIRECTORY') {
      throw new Error(`Expected a file but got a directory at ${path}`);
    }
    if (entry.type === 'VOLUME') {
      throw new Error(`Expected a file but got the volume root at ${path}`);
    }
    return entry.content;
  };
}
