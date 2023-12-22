import type { TokenStreamNextFn } from '../interfaces/TokenStreamNextFn';
import type { SegmentStream } from '../../segmentStream/interfaces/SegmentStream';
import type { TokenStreamCache } from '../interfaces/TokenStreamCache';
import { transformSegment } from '../transformer/transformSegment';
import type { TokenStreamContext } from '../interfaces/TokenStreamContext';

export function createTokenStreamNextFn(
  segmentStream: SegmentStream,
  cache: TokenStreamCache,
  context: TokenStreamContext
): TokenStreamNextFn {
  return () => {
    if (cache.nextToken) {
      const nextToken = cache.nextToken;
      delete cache.nextToken;
      return nextToken;
    }
    return transformSegment(segmentStream, context);
  };
}
