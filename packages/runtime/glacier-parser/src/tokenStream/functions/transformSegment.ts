import type { SegmentStream } from '../../segmentStream/interfaces/SegmentStream';
import type { Token } from '../interfaces/Token';
import type { TokenStreamContext } from '../interfaces/TokenStreamContext';
import { calculateLocation } from './calculateLocation';

export function transformSegment(
  segmentStream: SegmentStream,
  context: TokenStreamContext
): Token {
  const nextSegment = segmentStream.next();
  const nextLocation = calculateLocation(context.location, [nextSegment]);
  context.location = nextLocation.end;
  return {
    type: 'UNKNOWN',
    loc: nextLocation,
    value: nextSegment.value
  };
}
