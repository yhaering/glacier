import type { MemoryVolume } from '../interfaces/MemoryVolume';
import type { JsonVolume } from '../interfaces/JsonVolume';
import { parseJsonDirectory } from './parseJsonDirectory';
import { createEmptyVolume } from './createEmptyVolume';

export function parseJsonVolume(volume: JsonVolume): MemoryVolume {
  const memoryVolume = createEmptyVolume();
  parseJsonDirectory(memoryVolume, volume);
  return memoryVolume;
}
