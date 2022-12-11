import type { VirtualVolume } from '../types/VirtualVolume';
import type { JSONVolume } from '../types/JSONVolume';
import { compileDirectory } from './compileDirectory';

export function compileVolume(json: JSONVolume): VirtualVolume {
  const volume: VirtualVolume = new Map();
  compileDirectory(json, [], volume);
  return volume;
}
