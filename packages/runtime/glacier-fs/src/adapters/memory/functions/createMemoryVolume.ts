import type { JsonVolume } from '../interfaces/JsonVolume';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { parseJsonVolume } from './parseJsonVolume';
import { createEmptyVolume } from './createEmptyVolume';

export function createMemoryVolume(volume?: JsonVolume): MemoryVolume {
  if (volume) {
    return parseJsonVolume(volume);
  }
  return createEmptyVolume();
}
