import type { SegmentStreamPeekFn } from '../interfaces/SegmentStreamPeekFn';
import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';
import { transformCharacter } from '../functions/transformCharacter';

export function createSegmentStreamPeekFn(
  characterStream: CharacterStream
): SegmentStreamPeekFn {
  return () => {
    const nextCharacter = characterStream.peek();
    if (!nextCharacter) {
      return;
    }
    return transformCharacter(nextCharacter);
  };
}
