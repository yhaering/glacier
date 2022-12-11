import type { VirtualFile } from '../types/VirtualFile';

export function createVirtualFile(content: string): VirtualFile {
  return {
    type: 'file',
    content
  };
}
