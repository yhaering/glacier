import type { MemoryFile } from '../interfaces/MemoryFile';

export function createMemoryFile(name: string, content: Buffer): MemoryFile {
  return {
    type: 'FILE',
    name,
    content
  };
}
