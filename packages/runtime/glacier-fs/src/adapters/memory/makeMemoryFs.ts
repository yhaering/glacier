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

export function makeMemoryFs(): MemoryFileSystem {
  return {
    toJson: makeToJsonFn(),
    remove: makeRemoveFn(),
    readFile: makeReadFileFn(),
    readDir: makeReadDirFn(),
    isFile: makeIsFileFn(),
    isDirectory: makeIsDirectoryFn(),
    exists: makeExistsFn(),
    createDir: makeCreateDirFn(),
    writeFile: makeWriteFileFn()
  };
}
