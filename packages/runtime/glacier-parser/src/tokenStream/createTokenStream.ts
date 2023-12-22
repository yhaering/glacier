import type { TokenStream } from './interfaces/TokenStream';
import { createTokenStreamNextFn } from './factories/createTokenStreamNextFn';
import { createTokenStreamPeekFn } from './factories/createTokenStreamPeekFn';
import type { TokenStreamCache } from './interfaces/TokenStreamCache';
import type { SegmentStream } from '../segmentStream/interfaces/SegmentStream';
import { createTokenStreamContext } from './factories/createTokenStreamContext';

export function createTokenStream(segmentStream: SegmentStream): TokenStream {
  const cache: TokenStreamCache = {};
  const context = createTokenStreamContext();
  return {
    next: createTokenStreamNextFn(segmentStream, cache, context),
    peek: createTokenStreamPeekFn(segmentStream, cache, context)
  };
}
