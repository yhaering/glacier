import { createCharacterStreamNextFn } from './createCharacterStreamNextFn';
import { fakeCharacterStreamPointer } from '../../../test/fakes/fakeCharacterStreamPointer';
import { assertNextValue } from '../asserts/assertNextValue';

jest.mock('../asserts/assertNextValue');

function run() {
  const pointer = fakeCharacterStreamPointer(0);
  const fn = createCharacterStreamNextFn(pointer, '{');
  const returnValue = fn();
  return { fn, returnValue, pointer };
}

describe('createCharacterStreamNextFn', () => {
  beforeEach(run);

  test('exports a function called createCharacterStreamNextFn', () => {
    expect(createCharacterStreamNextFn).toBeInstanceOf(Function);
  });

  test('returns a CharacterStreamNextFn', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('increases the pointer', () => {
    const { pointer } = run();
    expect(pointer.value).toBe(1);
  });

  test('calls assertNextValue', () => {
    expect(assertNextValue).toHaveBeenCalledWith('{');
  });

  test('returns the value at the new pointer', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{');
  });
});
