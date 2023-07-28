import { FileSystem } from '@glacier/fs';

export interface ResolverConfig {
  extensions: string[];
  conditions: string[];
  mainFields: string[];
  fs: FileSystem;
}
