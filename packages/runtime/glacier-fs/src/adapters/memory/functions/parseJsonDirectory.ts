import type { JsonDirectory } from '../interfaces/JsonDirectory';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import type { MemoryVolume } from '../interfaces/MemoryVolume';

export function parseJsonDirectory(
  parent: MemoryDirectory | MemoryVolume,
  dir: JsonDirectory
): void {
  for (const [key, value] of Object.entries(dir)) {
    if (typeof value === 'string') {
      parent.entries.set(key, {
        type: 'FILE',
        name: key,
        content: Buffer.from(value)
      });
    } else {
      const directory: MemoryDirectory = {
        type: 'DIRECTORY',
        name: key,
        entries: new Map()
      };
      parseJsonDirectory(directory, value);
      parent.entries.set(key, directory);
    }
  }
}
