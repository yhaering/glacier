import type { TokenStreamPeekFn } from '../interfaces/TokenStreamPeekFn';
import type { SegmentStream } from '../../segmentStream/interfaces/SegmentStream';
import type { TokenStreamCache } from '../interfaces/TokenStreamCache';
import { transformSegment } from '../functions/transformSegment';
import type { TokenStreamContext } from '../interfaces/TokenStreamContext';

export function createTokenStreamPeekFn(
  segmentStream: SegmentStream,
  cache: TokenStreamCache,
  context: TokenStreamContext
): TokenStreamPeekFn {
  return () => {
    if (cache.nextToken) {
      return cache.nextToken;
    }

    if (!segmentStream.peek()) {
      return;
    }

    cache.nextToken = transformSegment(segmentStream, context);
    return cache.nextToken;
  };
}
