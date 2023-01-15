import type { VirtualFileSystem } from '@glacier/vfs';

export interface ResolveConfig {
  fs: VirtualFileSystem;

  conditions: string[];

  mainFields: string[];

  extensions: string[];
}
