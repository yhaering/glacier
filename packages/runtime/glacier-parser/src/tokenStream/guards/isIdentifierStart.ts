import type { Segment } from '../../segmentStream/interfaces/Segment';

export function isIdentifierStart(segment: Segment): boolean {
  if (segment.type !== 'LITERAL') {
    return false;
  }
  return /^[\p{L}$_]$/u.test(segment.value);
}
