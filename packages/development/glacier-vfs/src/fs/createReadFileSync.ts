import type { VirtualVolume } from '../types/VirtualVolume';

export function createReadFileSync(volume: VirtualVolume) {
  return (path: string, encoding: 'utf-8'): string => {
    const virtualPath = volume.get(path);
    if (!virtualPath) {
      throw new Error('File does not exist');
    }
    if (virtualPath.type === 'directory') {
      throw new Error('Can not read directory');
    }
    return virtualPath.content;
  };
}
