import { createTokenStreamNextFn } from './createTokenStreamNextFn';
import { fakeEmptyTokenStreamCache } from '../../../test/fakes/fakeEmptyTokenStreamCache';
import { fakeSegmentStream } from '../../../test/fakes/fakeSegmentStream';
import { transformSegment } from '../transformer/transformSegment';
import { fakeTokenStreamCache } from '../../../test/fakes/fakeTokenStreamCache';
import { fakeTokenStreamContext } from '../../../test/fakes/fakeTokenStreamContext';

jest.mock('../transformer/transformSegment', () => ({
  transformSegment: jest.fn().mockReturnValue('{{TOKEN}}')
}));

function run() {
  const segmentStream = fakeSegmentStream();
  const cache = fakeEmptyTokenStreamCache();
  const context = fakeTokenStreamContext();
  const fn = createTokenStreamNextFn(segmentStream, cache, context);
  const returnValue = fn();
  return { fn, returnValue, segmentStream, cache, context };
}

function runWithCache() {
  const segmentStream = fakeSegmentStream();
  const cache = fakeTokenStreamCache();
  const context = fakeTokenStreamContext();
  const fn = createTokenStreamNextFn(segmentStream, cache, context);
  const returnValue = fn();
  return { fn, returnValue, segmentStream, cache, context };
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
    const { segmentStream, context } = run();
    expect(transformSegment).toHaveBeenCalledWith(segmentStream, context);
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
});
