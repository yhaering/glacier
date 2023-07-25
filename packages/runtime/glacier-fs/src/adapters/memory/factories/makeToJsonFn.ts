import type { ToJsonFn } from '../interfaces/functions/ToJsonFn';
import type { MemoryDirectoryLike } from '../interfaces/MemoryDirectoryLike';
import type { JsonVolume } from '../interfaces/JsonVolume';

export function makeToJsonFn(volume: MemoryDirectoryLike): ToJsonFn {
  return () => {
    const directory: JsonVolume = {};
    for (const [key, value] of volume.entries) {
      if (value.type === 'FILE') {
        directory[key] = value.content.toString('utf8');
      } else if (value.type === 'DIRECTORY') {
        directory[key] = makeToJsonFn(value)();
      }
    }
    return directory;
  };
}
