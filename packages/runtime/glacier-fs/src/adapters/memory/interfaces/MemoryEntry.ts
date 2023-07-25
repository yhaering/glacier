import type { MemoryVolume } from './MemoryVolume';
import type { MemoryDirectory } from './MemoryDirectory';
import type { MemoryFile } from './MemoryFile';

export type MemoryEntry = MemoryVolume | MemoryDirectory | MemoryFile;
