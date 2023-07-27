import type { WriteFileFn } from '../../../interfaces/functions/WriteFileFn';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { getEntry } from '../functions/getEntry';
import { makeCreateDirFn } from './makeCreateDirFn';
import { assertEntryPath } from '../assertions/assertEntryPath';
import { createMemoryFile } from '../functions/createMemoryFile';
import { assertMemoryDirectoryLike } from '../assertions/assertMemoryDirectoryLike';
import { makeParseFn } from './makeParseFn';

export function makeWriteFileFn(volume: MemoryVolume): WriteFileFn {
  const createDir = makeCreateDirFn(volume);
  const parse = makeParseFn();
  return (path, content) => {
    assertEntryPath(path);
    const { dir, base } = parse(path);
    createDir(dir);
    const directory = getEntry(volume, dir);
    assertMemoryDirectoryLike(dir, directory);
    const memoryFile = createMemoryFile(base, content);
    directory.entries.set(base, memoryFile);
  };
}
