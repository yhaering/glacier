import type { CreateDirFn } from './functions/CreateDirFn';
import type { ReadDirFn } from './functions/ReadDirFn';
import type { ReadFileFn } from './functions/ReadFileFn';
import type { WriteFileFn } from './functions/WriteFileFn';
import type { RemoveFn } from './functions/RemoveFn';
import type { ExistsFn } from './functions/ExistsFn';
import type { IsFileFn } from './functions/IsFileFn';
import type { IsDirectoryFn } from './functions/IsDirectoryFn';

export interface FileSystem {
  isDirectory: IsDirectoryFn;
  isFile: IsFileFn;
  exists: ExistsFn;
  remove: RemoveFn;
  writeFile: WriteFileFn;
  readFile: ReadFileFn;
  readDir: ReadDirFn;
  createDir: CreateDirFn;
}
