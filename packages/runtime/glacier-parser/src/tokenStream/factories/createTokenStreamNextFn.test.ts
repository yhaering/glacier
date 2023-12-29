import { createTokenStreamNextFn } from './createTokenStreamNextFn';
import { fakeEmptyTokenStreamCache } from '../../../test/fakes/fakeEmptyTokenStreamCache';
import { transformCharacter } from '../transformer/transformCharacter';
import { fakeTokenStreamCache } from '../../../test/fakes/fakeTokenStreamCache';
import { fakeCharacterStream } from '../../../test/fakes/fakeCharacterStream';

jest.mock('../transformer/transformCharacter', () => ({
  transformCharacter: jest.fn().mockReturnValue('{{TOKEN}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const cache = fakeEmptyTokenStreamCache();
  const fn = createTokenStreamNextFn(characterStream, cache);
  const returnValue = fn();
  return { fn, returnValue, characterStream, cache };
}

function runWithCache() {
  const characterStream = fakeCharacterStream();
  const cache = fakeTokenStreamCache();
  const fn = createTokenStreamNextFn(characterStream, cache);
  const returnValue = fn();
  return { fn, returnValue, characterStream, cache };
}

function runWithEndOfStream() {
  (transformCharacter as jest.Mock).mockReturnValueOnce(void 0);
  return run();
}

describe('createTokenStreamNextFn', () => {
  beforeEach(run);

  test('exports a function called createTokenStreamNextFn', () => {
    expect(createTokenStreamNextFn).toBeInstanceOf(Function);
  });

  test('returns a TokenStreamNextFn', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls transformSegment', () => {
    const { characterStream } = run();
    expect(transformCharacter).toHaveBeenCalledWith(characterStream);
  });

  test('return token', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{TOKEN}}');
  });

  describe('if cache has a nextToken property', () => {
    beforeEach(runWithCache);

    test('remove nextToken property', () => {
      const { cache } = runWithCache();
      expect(cache.nextToken).toBeUndefined();
    });

    test('return value of nextToken', () => {
      const cache = fakeTokenStreamCache();
      const { returnValue } = runWithCache();
      expect(returnValue).toEqual(cache.nextToken);
    });
  });

  describe('if next token is undefined', () => {
    test('throws an error', () => {
      expect(() => {
        runWithEndOfStream();
      }).toThrow('End of token stream reached');
    });
  });
});
