import { assertNextValue } from '../asserts/assertNextValue';
import type { CharacterStreamPointer } from '../interfaces/CharacterStreamPointer';
import type { CharacterStreamNextFn } from '../interfaces/CharacterStreamNextFn';

export function createCharacterStreamNextFn(
  pointer: CharacterStreamPointer,
  stream: string
): CharacterStreamNextFn {
  return () => {
    const nextPointer = pointer.value++;
    const nextValue = stream[nextPointer];
    assertNextValue(nextValue);
    return nextValue;
  };
}
