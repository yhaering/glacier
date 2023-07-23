import type { MemoryDirectory } from './MemoryDirectory';

export interface MemoryFile {
  type: 'FILE';
  name: string;
  parent?: MemoryDirectory;
  content: Buffer;
}
