import type { ToJsonFn } from './functions/ToJsonFn';
import type { FileSystem } from '../../../interfaces/FileSystem';

export interface MemoryFileSystem extends FileSystem {
  toJson: ToJsonFn;
}
