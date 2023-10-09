import type { TokenStream } from './interfaces/TokenStream';
import { createTokenStreamNextFn } from './factories/createTokenStreamNextFn';
import { createTokenStreamPeekFn } from './factories/createTokenStreamPeekFn';
import type { TokenStreamCache } from './interfaces/TokenStreamCache';
import type { SegmentStream } from '../segmentStream/interfaces/SegmentStream';
import type { TokenStreamContext } from './interfaces/TokenStreamContext';

export function createTokenStream(segmentStream: SegmentStream): TokenStream {
  const cache: TokenStreamCache = {};
  const context: TokenStreamContext = { location: { line: 1, column: 0 } };
  return {
    next: createTokenStreamNextFn(segmentStream, cache, context),
    peek: createTokenStreamPeekFn(segmentStream, cache, context)
  };
}
