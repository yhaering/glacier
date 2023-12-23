import { createTokenStream } from './createTokenStream';
import { createTokenStreamNextFn } from './factories/createTokenStreamNextFn';
import { createTokenStreamPeekFn } from './factories/createTokenStreamPeekFn';
import { fakeCharacterStream } from '../../test/fakes/fakeCharacterStream';

jest.mock('./factories/createTokenStreamNextFn', () => ({
  createTokenStreamNextFn: jest.fn().mockReturnValue('{{NEXT_FN}}')
}));

jest.mock('./factories/createTokenStreamPeekFn', () => ({
  createTokenStreamPeekFn: jest.fn().mockReturnValue('{{PEEK_FN}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = createTokenStream(characterStream);
  return { returnValue, characterStream };
}

describe('createTokenStream', () => {
  beforeEach(run);

  test('exports a function called createTokenStream', () => {
    expect(createTokenStream).toBeInstanceOf(Function);
  });

  test('calls createTokenStreamNextFn', () => {
    const { characterStream } = run();
    expect(createTokenStreamNextFn).toHaveBeenCalledWith(characterStream, {});
  });

  test('calls createTokenStreamPeekFn', () => {
    const { characterStream } = run();
    expect(createTokenStreamPeekFn).toHaveBeenCalledWith(characterStream, {});
  });

  test('returns TokenStream', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      next: '{{NEXT_FN}}',
      peek: '{{PEEK_FN}}'
    });
  });
});
