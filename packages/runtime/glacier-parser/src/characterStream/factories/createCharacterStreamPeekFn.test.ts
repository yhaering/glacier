import { createCharacterStreamPeekFn } from './createCharacterStreamPeekFn';
import { fakeCharacterStreamPointer } from '../../../test/fakes/fakeCharacterStreamPointer';

function run() {
  const pointer = fakeCharacterStreamPointer(0);
  const fn = createCharacterStreamPeekFn(pointer, '{{STREAM}}');
  const returnValue = fn();
  return { fn, returnValue };
}

describe('createCharacterStreamPeekFn', () => {
  beforeEach(run);

  test('exports a function called createCharacterStreamPeekFn', () => {
    expect(createCharacterStreamPeekFn).toBeInstanceOf(Function);
  });

  test('returns a CharacterStreamPeekFn', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('returns character at pointer position', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{');
  });
});
