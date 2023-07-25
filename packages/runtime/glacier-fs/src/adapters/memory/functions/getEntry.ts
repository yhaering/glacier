import type { MemoryEntry } from '../interfaces/MemoryEntry';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';
import type { MemoryVolume } from '../interfaces/MemoryVolume';
import type { MemoryDirectoryLike } from '../interfaces/MemoryDirectoryLike';

export function getEntry(
  volume: MemoryVolume,
  path: string
): MemoryEntry | undefined {
  if (path === '/') {
    return volume;
  }
  const segments = path.split('/').slice(1);
  let pointer: MemoryDirectoryLike = volume;

  for (let i = 0; i < segments.length; i++) {
    const isLast = i === segments.length - 1;
    const segment = segments[i];
    const entry = pointer.entries.get(segment);
    if (entry) {
      if (entry.type === 'FILE') {
        if (isLast) {
          return entry;
        }
        return;
      } else {
        pointer = entry;
      }
    } else {
      return;
    }
  }

  return pointer as MemoryDirectory;
}
