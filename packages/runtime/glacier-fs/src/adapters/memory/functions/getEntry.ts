import type { MemoryEntry } from '../interfaces/MemoryEntry';
import type { MemoryVolume } from '../interfaces/MemoryVolume';

export function getEntry(
  volume: MemoryVolume,
  path: string
): MemoryEntry | undefined {
  const segments = path.split('/').filter(Boolean);
  return segments.reduce<MemoryEntry | undefined>((pointer, segment) => {
    if (pointer === undefined || pointer.type === 'FILE') {
      return;
    }
    return pointer.entries.get(segment);
  }, volume);
}
