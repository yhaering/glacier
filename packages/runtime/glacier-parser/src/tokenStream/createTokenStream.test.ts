import { createTokenStream } from './createTokenStream';
import { createTokenStreamNextFn } from './factories/createTokenStreamNextFn';
import { createTokenStreamPeekFn } from './factories/createTokenStreamPeekFn';
import { fakeSegmentStream } from '../../test/fakes/fakeSegmentStream';
import { fakeTokenStreamContext } from '../../test/fakes/fakeTokenStreamContext';

jest.mock('./factories/createTokenStreamNextFn', () => ({
  createTokenStreamNextFn: jest.fn().mockReturnValue('{{NEXT_FN}}')
}));

jest.mock('./factories/createTokenStreamPeekFn', () => ({
  createTokenStreamPeekFn: jest.fn().mockReturnValue('{{PEEK_FN}}')
}));

function run() {
  const segmentStream = fakeSegmentStream();
  const returnValue = createTokenStream(segmentStream);
  return { returnValue, segmentStream };
}

describe('createTokenStream', () => {
  beforeEach(run);

  test('exports a function called createTokenStream', () => {
    expect(createTokenStream).toBeInstanceOf(Function);
  });

  test('calls createTokenStreamNextFn', () => {
    const { segmentStream } = run();
    const context = fakeTokenStreamContext();
    expect(createTokenStreamNextFn).toHaveBeenCalledWith(
      segmentStream,
      {},
      context
    );
  });

  test('calls createTokenStreamPeekFn', () => {
    const { segmentStream } = run();
    const context = fakeTokenStreamContext();
    expect(createTokenStreamPeekFn).toHaveBeenCalledWith(
      segmentStream,
      {},
      context
    );
  });

  test('returns TokenStream', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      next: '{{NEXT_FN}}',
      peek: '{{PEEK_FN}}'
    });
  });
});
