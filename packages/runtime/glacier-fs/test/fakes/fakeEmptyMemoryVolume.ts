import type { MemoryVolume } from '../../src/adapters/memory/interfaces/MemoryVolume';

export function fakeEmptyMemoryVolume(): MemoryVolume {
  return {
    type: 'VOLUME',
    entries: new Map([])
  };
}
