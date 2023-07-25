import type { MemoryDirectory } from '../interfaces/MemoryDirectory';

export function createMemoryDirectory(name: string): MemoryDirectory {
  return {
    type: 'DIRECTORY',
    name,
    entries: new Map()
  };
}
