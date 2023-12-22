import { createTokenStreamPeekFn } from './createTokenStreamPeekFn';
import { fakeEmptyTokenStreamCache } from '../../../test/fakes/fakeEmptyTokenStreamCache';
import { fakeSegmentStream } from '../../../test/fakes/fakeSegmentStream';
import { transformSegment } from '../transformer/transformSegment';
import { fakeTokenStreamCache } from '../../../test/fakes/fakeTokenStreamCache';
import { fakeTokenStreamContext } from '../../../test/fakes/fakeTokenStreamContext';

jest.mock('../transformer/transformSegment', () => ({
  transformSegment: jest.fn().mockReturnValue('{{TOKEN}}')
}));

function run() {
  const cache = fakeEmptyTokenStreamCache();
  const segmentStream = fakeSegmentStream();
  const context = fakeTokenStreamContext();
  const fn = createTokenStreamPeekFn(segmentStream, cache, context);
  const returnValue = fn();
  return { fn, returnValue, segmentStream, cache, context };
}

function runWithCache() {
  const cache = fakeTokenStreamCache();
  const segmentStream = fakeSegmentStream();
  const context = fakeTokenStreamContext();
  const fn = createTokenStreamPeekFn(segmentStream, cache, context);
  const returnValue = fn();
  return { fn, returnValue, segmentStream, cache };
}

function runWithNoFurtherSegments() {
  const cache = fakeEmptyTokenStreamCache();
  const segmentStream = fakeSegmentStream();
  const context = fakeTokenStreamContext();
  jest.spyOn(segmentStream, 'peek').mockReturnValue(void 0);
  const fn = createTokenStreamPeekFn(segmentStream, cache, context);
  const returnValue = fn();
  return { fn, returnValue, segmentStream, cache };
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
    const { segmentStream, context } = run();
    expect(transformSegment).toHaveBeenCalledWith(segmentStream, context);
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
