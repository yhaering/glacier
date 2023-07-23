import type { MemoryFile } from './MemoryFile';
export interface MemoryDirectory {
  type: 'DIRECTORY';
  name: string;
  parent: MemoryDirectory;
  entries: Map<string, MemoryFile | MemoryDirectory>;
}
