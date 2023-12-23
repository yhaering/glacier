import { createTokenStreamPeekFn } from './createTokenStreamPeekFn';
import { fakeEmptyTokenStreamCache } from '../../../test/fakes/fakeEmptyTokenStreamCache';
import { transformCharacter } from '../transformer/transformCharacter';
import { fakeTokenStreamCache } from '../../../test/fakes/fakeTokenStreamCache';
import { fakeCharacterStream } from '../../../test/fakes/fakeCharacterStream';

jest.mock('../transformer/transformCharacter', () => ({
  transformCharacter: jest.fn().mockReturnValue('{{TOKEN}}')
}));

function run() {
  const cache = fakeEmptyTokenStreamCache();
  const characterStream = fakeCharacterStream();
  const fn = createTokenStreamPeekFn(characterStream, cache);
  const returnValue = fn();
  return { fn, returnValue, characterStream, cache };
}

function runWithCache() {
  const cache = fakeTokenStreamCache();
  const characterStream = fakeCharacterStream();
  const fn = createTokenStreamPeekFn(characterStream, cache);
  const returnValue = fn();
  return { fn, returnValue, characterStream, cache };
}

function runWithNoFurtherSegments() {
  const cache = fakeEmptyTokenStreamCache();
  const characterStream = fakeCharacterStream();
  jest.spyOn(characterStream, 'peek').mockReturnValue(void 0);
  const fn = createTokenStreamPeekFn(characterStream, cache);
  const returnValue = fn();
  return { fn, returnValue, characterStream, cache };
}

describe('createTokenStreamPeekFn', () => {
  beforeEach(run);

  test('exports a function called createTokenStreamPeekFn', () => {
    expect(createTokenStreamPeekFn).toBeInstanceOf(Function);
  });

  test('returns TokenStreamPeekFn', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls transformSegment', () => {
    const { characterStream } = run();
    expect(transformCharacter).toHaveBeenCalledWith(characterStream);
  });

  test('assign token to cache', () => {
    const { cache } = run();
    expect(cache.nextToken).toBe('{{TOKEN}}');
  });

  test('return token', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{TOKEN}}');
  });

  describe('if cache contains nextToken', () => {
    test('return next token', () => {
      const { returnValue, cache } = runWithCache();
      expect(returnValue).toEqual(cache.nextToken);
    });
  });

  describe('if segmentStream does not have further segments', () => {
    test('return undefined', () => {
      const { returnValue } = runWithNoFurtherSegments();
      expect(returnValue).toBeUndefined();
    });
  });
});
