import type { VirtualVolume } from '../types/VirtualVolume';

export function createExistsSync(volume: VirtualVolume) {
  return (path: string): boolean => {
    return volume.has(path);
  };
}
