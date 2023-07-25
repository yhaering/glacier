import type { CreateDirFn } from '../../../interfaces/functions/CreateDirFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import type { MemoryDirectoryLike } from '../interfaces/MemoryDirectoryLike';

export function makeCreateDirFn(volume: MemoryVolume): CreateDirFn {
  return (path) => {
    if (path === '/') {
      return;
    }
    const segments = path.split('/').slice(1);
    let pointer: MemoryDirectoryLike = volume;

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const entry = pointer.entries.get(segment);

      if (entry === undefined) {
        const directory: MemoryDirectory = {
          type: 'DIRECTORY',
          name: segment,
          entries: new Map()
        };
        pointer.entries.set(segment, directory);
        pointer = directory;
      } else if (entry.type === 'FILE') {
        throw new Error(
          `There is already a file at ${segments.slice(0, i).join('/')}`
        );
      } else if (entry.type === 'DIRECTORY') {
        pointer = entry;
      }
    }
  };
}
