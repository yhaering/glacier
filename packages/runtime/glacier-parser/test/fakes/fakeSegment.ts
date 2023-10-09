import type { Segment } from '../../src/segmentStream/interfaces/Segment';

export function fakeSegment(): Segment {
  return {
    type: 'LITERAL',
    value: 'class'
  };
}
