import type { MemoryFile } from './MemoryFile';
import type { MemoryDirectory } from './MemoryDirectory';

export interface MemoryVolume {
  type: 'VOLUME';
  entries: Map<string, MemoryFile | MemoryDirectory>;
}
