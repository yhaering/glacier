import type { Segment } from '../../segmentStream/interfaces/Segment';

export function isIdentifier(segment: Segment): boolean {
  if (segment.type !== 'LITERAL') {
    return false;
  }
  return /^[\p{L}$_0-9]$/u.test(segment.value);
}
