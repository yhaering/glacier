import { createResolver } from '../../src/createResolver';
import { createMemoryFs, JsonVolume } from '@glacier/fs';
import { createVolumeFromPath } from './createVolumeFromPath';

export function createDefaultResolver(volume: JsonVolume | string[]) {
  return createResolver({
    mainFields: ['main'],
    fs: createMemoryFs(
      Array.isArray(volume) ? createVolumeFromPath(volume) : volume
    ),
    conditions: ['node', 'require'],
    extensions: ['.js', '.json']
  });
}
