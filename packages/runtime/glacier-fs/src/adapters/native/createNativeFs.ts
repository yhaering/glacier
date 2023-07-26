import type { FileSystem } from '../../interfaces/FileSystem';
import { makeWriteFileFn } from './factories/makeWriteFileFn';
import { makeCreateDirFn } from './factories/makeCreateDirFn';
import { makeExistsFn } from './factories/makeExistsFn';
import { makeIsDirectoryFn } from './factories/makeIsDirectoryFn';
import { makeIsFileFn } from './factories/makeIsFileFn';
import { makeReadDirFn } from './factories/makeReadDirFn';
import { makeReadFileFn } from './factories/makeReadFileFn';
import { makeRemoveFn } from './factories/makeRemoveFn';

export function createNativeFs(): FileSystem {
  return {
    writeFile: makeWriteFileFn(),
    createDir: makeCreateDirFn(),
    exists: makeExistsFn(),
    isDirectory: makeIsDirectoryFn(),
    isFile: makeIsFileFn(),
    readDir: makeReadDirFn(),
    readFile: makeReadFileFn(),
    remove: makeRemoveFn()
  };
}
