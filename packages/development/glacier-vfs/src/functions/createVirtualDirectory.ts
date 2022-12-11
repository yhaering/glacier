import type { VirtualDirectory } from '../types/VirtualDirectory';

export function createVirtualDirectory(): VirtualDirectory {
  return {
    type: 'directory'
  };
}
