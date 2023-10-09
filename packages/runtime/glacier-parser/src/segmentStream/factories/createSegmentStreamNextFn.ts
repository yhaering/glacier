import type { SegmentStreamNextFn } from '../interfaces/SegmentStreamNextFn';
import { transformCharacter } from '../functions/transformCharacter';
import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';

export function createSegmentStreamNextFn(
  characterStream: CharacterStream
): SegmentStreamNextFn {
  return () => {
    const nextCharacter = characterStream.next();
    return transformCharacter(nextCharacter);
  };
}
