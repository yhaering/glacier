import type { CharacterStreamPointer } from '../../src/characterStream/interfaces/CharacterStreamPointer';

export function fakeCharacterStreamPointer(value = 0): CharacterStreamPointer {
  return {
    value
  };
}
