import type { Segment } from '../interfaces/Segment';
import type { SegmentType } from '../interfaces/SegmentType';

export function createSegment(type: SegmentType, value: string): Segment {
  return {
    type,
    value
  };
}
