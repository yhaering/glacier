import type { MemoryFile } from '../../src/adapters/memory/interfaces/MemoryFile';

export function fakeMemoryFile(): MemoryFile {
  return {
    type: 'FILE',
    name: '{{NAME}}',
    content: Buffer.from('{{CONTENT}}')
  };
}
