import type { CharacterStream } from './interfaces/CharacterStream';
import type { CharacterStreamPointer } from './interfaces/CharacterStreamPointer';
import { createCharacterStreamNextFn } from './factories/createCharacterStreamNextFn';
import { createCharacterStreamPeekFn } from './factories/createCharacterStreamPeekFn';

export function createCharacterStream(stream: string): CharacterStream {
  const pointer: CharacterStreamPointer = { value: 0 };
  return {
    next: createCharacterStreamNextFn(pointer, stream),
    peek: createCharacterStreamPeekFn(pointer, stream)
  };
}
