import type { WriteFileFn } from '../../../interfaces/functions/WriteFileFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import { getEntry } from '../functions/getEntry';
import { makeCreateDirFn } from './makeCreateDirFn';
import { assertNotRootPath } from '../assertions/assertNotRootPath';
import { createMemoryFile } from '../functions/createMemoryFile';

export function makeWriteFileFn(volume: MemoryVolume): WriteFileFn {
  const createDir = makeCreateDirFn(volume);
  return (path, content) => {
    assertNotRootPath(path);
    const segments = path.split('/');
    createDir(segments.slice(0, -1).join('/'));
    const directory = getEntry(volume, path) as MemoryDirectory;
    const fileName = segments.pop() as string;
    const memoryFile = createMemoryFile(fileName, content);
    directory.entries.set(fileName, memoryFile);
  };
}
