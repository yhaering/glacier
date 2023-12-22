import type { SegmentStream } from '../../segmentStream/interfaces/SegmentStream';
import type { Token } from '../interfaces/Token';
import type { TokenStreamContext } from '../interfaces/TokenStreamContext';

export function transformSegment(
  segmentStream: SegmentStream,
  context: TokenStreamContext
): Token {
  const nextSegment = segmentStream.next();
  return {
    type: 'UNKNOWN',
    loc: context.getLoc([nextSegment]),
    value: nextSegment.value
  };
}
