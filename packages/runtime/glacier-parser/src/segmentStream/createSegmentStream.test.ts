import { createSegmentStream } from './createSegmentStream';
import { createSegmentStreamPeekFn } from './factories/createSegmentStreamPeekFn';
import { fakeCharacterStream } from '../../test/fakes/fakeCharacterStream';
import { createSegmentStreamNextFn } from './factories/createSegmentStreamNextFn';

jest.mock('./factories/createSegmentStreamPeekFn', () => ({
  createSegmentStreamPeekFn: jest.fn().mockReturnValue('{{PEEK_FN}}')
}));

jest.mock('./factories/createSegmentStreamNextFn', () => ({
  createSegmentStreamNextFn: jest.fn().mockReturnValue('{{NEXT_FN}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = createSegmentStream(characterStream);
  return { returnValue, characterStream };
}

describe('createSegmentStream', () => {
  beforeEach(run);

  test('exports a function called createSegmentStream', () => {
    expect(createSegmentStream).toBeInstanceOf(Function);
  });

  test('calls createSegmentStreamPeekFn', () => {
    const { characterStream } = run();
    expect(createSegmentStreamPeekFn).toHaveBeenCalledWith(characterStream);
  });

  test('calls createSegmentStreamNextFn', () => {
    const { characterStream } = run();
    expect(createSegmentStreamNextFn).toHaveBeenCalledWith(characterStream);
  });
});
