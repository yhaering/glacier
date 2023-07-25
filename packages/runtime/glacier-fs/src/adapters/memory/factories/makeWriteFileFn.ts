import type { WriteFileFn } from '../../../interfaces/functions/WriteFileFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import { getEntry } from '../functions/getEntry';
import { makeCreateDirFn } from './makeCreateDirFn';

export function makeWriteFileFn(volume: MemoryVolume): WriteFileFn {
  const createDir = makeCreateDirFn(volume);
  return (path, content) => {
    if (path === '/') {
      throw new Error(
        'Can not create a file called / as it is the root of the file system'
      );
    }
    const segments = path.split('/');
    createDir(segments.slice(0, -1).join('/'));
    const directory = getEntry(volume, path) as MemoryDirectory;
    const fileName = segments.pop() as string;
    directory.entries.set(fileName, {
      type: 'FILE',
      name: fileName,
      content: content
    });
  };
}
