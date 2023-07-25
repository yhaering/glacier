import type { MemoryVolume } from '../interfaces/MemoryVolume';

export function createEmptyVolume(): MemoryVolume {
  return {
    type: 'VOLUME',
    entries: new Map()
  };
}
