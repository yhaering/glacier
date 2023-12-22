import { createTokenStream } from './createTokenStream';
import { createTokenStreamNextFn } from './factories/createTokenStreamNextFn';
import { createTokenStreamPeekFn } from './factories/createTokenStreamPeekFn';
import { fakeSegmentStream } from '../../test/fakes/fakeSegmentStream';

jest.mock('./factories/createTokenStreamNextFn', () => ({
  createTokenStreamNextFn: jest.fn().mockReturnValue('{{NEXT_FN}}')
}));

jest.mock('./factories/createTokenStreamPeekFn', () => ({
  createTokenStreamPeekFn: jest.fn().mockReturnValue('{{PEEK_FN}}')
}));

jest.mock('./factories/createTokenStreamContext', () => ({
  createTokenStreamContext: jest.fn().mockReturnValue('{{CONTEXT}}')
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
    expect(createTokenStreamNextFn).toHaveBeenCalledWith(
      segmentStream,
      {},
      '{{CONTEXT}}'
    );
  });

  test('calls createTokenStreamPeekFn', () => {
    const { segmentStream } = run();
    expect(createTokenStreamPeekFn).toHaveBeenCalledWith(
      segmentStream,
      {},
      '{{CONTEXT}}'
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
