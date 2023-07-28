import { JsonVolume } from '@glacier/fs';

export function createVolumeFromPath(paths: string[]): JsonVolume {
  const volume: JsonVolume = {};
  for (const path of paths) {
    set(volume, path.split('/').filter(Boolean), '');
  }
  return volume;
}

function set(object: any, path: string[], value: any): any {
  if (!object || !path || path.length === 0) {
    return object;
  }

  const [current, ...rest] = path;
  if (rest.length === 0) {
    object[current] = value;
    return object;
  }

  if (object[current] === undefined) {
    object[current] = {};
  }

  set(object[current], rest, value);

  return object;
}
