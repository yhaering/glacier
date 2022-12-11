import type { VirtualFileSystem } from '@glacier/vfs';

export interface ResolveConfig {
  fs: VirtualFileSystem

  conditions: string[];
}
