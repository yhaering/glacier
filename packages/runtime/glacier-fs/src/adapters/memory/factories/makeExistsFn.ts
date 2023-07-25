import type { ExistsFn } from '../../../interfaces/functions/ExistsFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';

export function makeExistsFn(volume: MemoryVolume): ExistsFn {
  return (path) => {
    const entry = getEntry(volume, path);
    return entry !== undefined;
  };
}
