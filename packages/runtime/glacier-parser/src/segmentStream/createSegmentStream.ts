import type { SegmentStream } from './interfaces/SegmentStream';
import type { CharacterStream } from '../characterStream/interfaces/CharacterStream';
import { createSegmentStreamPeekFn } from './factories/createSegmentStreamPeekFn';
import { createSegmentStreamNextFn } from './factories/createSegmentStreamNextFn';

export function createSegmentStream(
  characterStream: CharacterStream
): SegmentStream {
  return {
    peek: createSegmentStreamPeekFn(characterStream),
    next: createSegmentStreamNextFn(characterStream)
  };
}
