import { createSegmentStreamPeekFn } from './createSegmentStreamPeekFn';
import { fakeCharacterStream } from '../../../test/fakes/fakeCharacterStream';
import { transformCharacter } from '../functions/transformCharacter';

jest.mock('../functions/transformCharacter', () => ({
  transformCharacter: jest.fn().mockReturnValue('{{SEGMENT}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const fn = createSegmentStreamPeekFn(characterStream);
  const returnValue = fn();
  return { fn, returnValue, characterStream };
}

function runWithUndefinedChar() {
  const characterStream = fakeCharacterStream();
  jest.spyOn(characterStream, 'peek').mockReturnValueOnce(void 0);
  const fn = createSegmentStreamPeekFn(characterStream);
  const returnValue = fn();
  return { fn, returnValue, characterStream };
}

describe('createSegmentStreamPeekFn', () => {
  beforeEach(run);

  test('exports a function called createSegmentStreamPeekFn', () => {
    expect(createSegmentStreamPeekFn).toBeInstanceOf(Function);
  });

  test('returns a SegmentStreamPeekFn', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls CharacterStream.peek', () => {
    const { characterStream } = run();
    expect(characterStream.peek).toHaveBeenCalledWith();
  });

  test('call transformCharacter', () => {
    expect(transformCharacter).toHaveBeenCalledWith('{{CHAR}}');
  });

  describe('if CharacterStream.peek returns undefined', () => {
    test('return undefined', () => {
      const { returnValue } = runWithUndefinedChar();
      expect(returnValue).toBeUndefined();
    });
  });
});
