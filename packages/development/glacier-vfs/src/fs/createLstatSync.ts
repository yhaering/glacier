import type { VirtualVolume } from '../types/VirtualVolume';

export function createLstatSync(volume: VirtualVolume) {
  return (path: string) => {
    const virtualPath = volume.get(path);
    if (!virtualPath) {
      throw new Error('File does not exist');
    }
    return {
      isFile: () => {
        return virtualPath.type === 'file';
      },
      isDirectory: () => {
        return virtualPath.type === 'directory';
      }
    };
  };
}
