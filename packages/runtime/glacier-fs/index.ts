export type { FileSystem } from './src/interfaces/FileSystem';
export type { CreateDirFn } from './src/interfaces/functions/CreateDirFn';
export type { ExistsFn } from './src/interfaces/functions/ExistsFn';
export type { IsDirectoryFn } from './src/interfaces/functions/IsDirectoryFn';
export type { IsFileFn } from './src/interfaces/functions/IsFileFn';
export type { ReadDirFn } from './src/interfaces/functions/ReadDirFn';
export type { ReadFileFn } from './src/interfaces/functions/ReadFileFn';
export type { RemoveFn } from './src/interfaces/functions/RemoveFn';
export type { WriteFileFn } from './src/interfaces/functions/WriteFileFn';
export type { JsonDirectory } from './src/adapters/memory/interfaces/JsonDirectory';
export type { JsonVolume } from './src/adapters/memory/interfaces/JsonVolume';
export type { JsonFile } from './src/adapters/memory/interfaces/JsonFile';
export type { MemoryFileSystem } from './src/adapters/memory/interfaces/MemoryFileSystem';
export type { ToJsonFn } from './src/adapters/memory/interfaces/functions/ToJsonFn';

export { createNativeFs } from './src/adapters/native/createNativeFs';
export { createMemoryFs } from './src/adapters/memory/createMemoryFs';
