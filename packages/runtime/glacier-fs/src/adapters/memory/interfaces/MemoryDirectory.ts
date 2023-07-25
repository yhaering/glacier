import type { MemoryDirectoryLike } from './MemoryDirectoryLike';

export interface MemoryDirectory extends MemoryDirectoryLike {
  type: 'DIRECTORY';
  name: string;
}
