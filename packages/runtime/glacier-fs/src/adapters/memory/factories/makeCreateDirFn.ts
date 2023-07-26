import type { CreateDirFn } from '../../../interfaces/functions/CreateDirFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { createMemoryDirectory } from '../functions/createMemoryDirectory';
import { assertMemoryDirectoryLike } from '../assertions/assertMemoryDirectoryLike';
import type { MemoryDirectoryLike } from '../interfaces/MemoryDirectoryLike';

export function makeCreateDirFn(volume: MemoryVolume): CreateDirFn {
  return (path) => {
    const segments = path.split('/').slice(1);
    segments.reduce<MemoryDirectoryLike>((pointer, segment, i) => {
      const entry = pointer.entries.get(segment);
      const entryPath = '/' + segments.slice(0, i + 1).join('/');
      if (entry === undefined) {
        const directory = createMemoryDirectory(segment);
        pointer.entries.set(segment, directory);
        return directory;
      }
      assertMemoryDirectoryLike(entryPath, entry);
      return entry;
    }, volume);
  };
}
