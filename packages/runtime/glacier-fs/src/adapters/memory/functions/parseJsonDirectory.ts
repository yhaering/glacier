import type { JsonDirectory } from '../interfaces/JsonDirectory';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import { createMemoryDirectory } from './createMemoryDirectory';
import { createMemoryFile } from './createMemoryFile';

export function parseJsonDirectory(
  parent: MemoryDirectory | MemoryVolume,
  dir: JsonDirectory
): void {
  for (const [key, value] of Object.entries(dir)) {
    if (typeof value === 'string') {
      const memoryFile = createMemoryFile(key, Buffer.from(value));
      parent.entries.set(key, memoryFile);
    } else {
      const directory = createMemoryDirectory(key);
      parseJsonDirectory(directory, value);
      parent.entries.set(key, directory);
    }
  }
}
