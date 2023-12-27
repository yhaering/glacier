import type { CharacterStreamPointer } from '../interfaces/CharacterStreamPointer';
import type { CharacterStreamPeekFn } from '../interfaces/CharacterStreamPeekFn';

export function createCharacterStreamPeekFn(
  pointer: CharacterStreamPointer,
  stream: string
): CharacterStreamPeekFn {
  return (offset = 0) => {
    return stream[pointer.value + offset];
  };
}
