import type { MemoryDirectory } from '../../src/adapters/memory/interfaces/MemoryDirectory';

export function fakeMemoryDirectory(): MemoryDirectory {
  return {
    type: 'DIRECTORY',
    name: '{{NAME}}',
    entries: new Map()
  };
}
