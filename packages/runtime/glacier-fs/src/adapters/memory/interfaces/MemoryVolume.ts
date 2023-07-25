import type { MemoryDirectoryLike } from './MemoryDirectoryLike';

export interface MemoryVolume extends MemoryDirectoryLike {
  type: 'VOLUME';
}
