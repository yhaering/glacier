import type { JSONVolume } from '../types/JSONVolume';
import type { VirtualVolume } from '../types/VirtualVolume';
import { createVirtualFile } from './createVirtualFile';
import { createVirtualDirectory } from './createVirtualDirectory';

export function compileDirectory(
  json: JSONVolume,
  context: string[],
  volume: VirtualVolume
): void {
  for (const key in json) {
    const value: JSONVolume | string = json[key];
    const joinedPath = [...context, key].join('/');
    if (typeof value === 'string') {
      volume.set(joinedPath, createVirtualFile(value));
    } else if (value && typeof value === 'object') {
      volume.set(joinedPath, createVirtualDirectory());
      compileDirectory(value, [...context, key] as string[], volume);
    }
  }
}
