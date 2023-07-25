import type { MemoryDirectory } from './MemoryDirectory';
import type { MemoryFile } from './MemoryFile';

export interface MemoryDirectoryLike {
  entries: Map<string, MemoryFile | MemoryDirectory>;
}
