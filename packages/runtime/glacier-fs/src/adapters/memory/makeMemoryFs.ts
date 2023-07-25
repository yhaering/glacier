import type { MemoryFileSystem } from './interfaces/MemoryFileSystem';
import { makeToJsonFn } from './factories/makeToJsonFn';
import { makeRemoveFn } from './factories/makeRemoveFn';
import { makeReadFileFn } from './factories/makeReadFileFn';
import { makeReadDirFn } from './factories/makeReadDirFn';
import { makeIsFileFn } from './factories/makeIsFileFn';
import { makeIsDirectoryFn } from './factories/makeIsDirectoryFn';
import { makeExistsFn } from './factories/makeExistsFn';
import { makeCreateDirFn } from './factories/makeCreateDirFn';
import { makeWriteFileFn } from './factories/makeWriteFileFn';
import type { JsonVolume } from './interfaces/JsonVolume';
import { createMemoryVolume } from './functions/createMemoryVolume';

export function makeMemoryFs(volume?: JsonVolume): MemoryFileSystem {
  const memoryVolume = createMemoryVolume(volume);
  return {
    toJson: makeToJsonFn(memoryVolume),
    remove: makeRemoveFn(memoryVolume),
    readFile: makeReadFileFn(memoryVolume),
    readDir: makeReadDirFn(memoryVolume),
    isFile: makeIsFileFn(memoryVolume),
    isDirectory: makeIsDirectoryFn(memoryVolume),
    exists: makeExistsFn(memoryVolume),
    createDir: makeCreateDirFn(memoryVolume),
    writeFile: makeWriteFileFn(memoryVolume)
  };
}
