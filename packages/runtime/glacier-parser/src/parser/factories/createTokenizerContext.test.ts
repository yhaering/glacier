import { createTokenizerContext } from './createTokenizerContext';
import { fakeTokenStream } from '../../../test/fakes/fakeTokenStream';
import { fakePositionContext } from '../../../test/fakes/fakePositionContext';
import { createNextTokenFn } from './createNextTokenFn';
import { createPeekTokenFn } from './createPeekTokenFn';

jest.mock('./createNextTokenFn', () => ({
  createNextTokenFn: jest.fn().mockReturnValue('{{NEXT_TOKEN_FN}}')
}));

jest.mock('./createPeekTokenFn', () => ({
  createPeekTokenFn: jest.fn().mockReturnValue('{{PEEK_TOKEN_FN}}')
}));

function run() {
  const tokenStream = fakeTokenStream();
  const positionContext = fakePositionContext();
  const returnValue = createTokenizerContext(tokenStream, positionContext);
  return { returnValue, tokenStream, positionContext };
}

describe('createTokenizerContext', () => {
  beforeEach(run);

  test('exports a function called createTokenizerContext', () => {
    expect(createTokenizerContext).toBeInstanceOf(Function);
  });

  test('calls createNextTokenFn', () => {
    const { tokenStream, positionContext } = run();
    expect(createNextTokenFn).toHaveBeenCalledWith(
      tokenStream,
      positionContext
    );
  });

  test('calls createPeekTokenFn', () => {
    const { tokenStream } = run();
    expect(createPeekTokenFn).toHaveBeenCalledWith(tokenStream);
  });

  test('returns TokenizerContext', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      next: '{{NEXT_TOKEN_FN}}',
      peek: '{{PEEK_TOKEN_FN}}'
    });
  });
});
