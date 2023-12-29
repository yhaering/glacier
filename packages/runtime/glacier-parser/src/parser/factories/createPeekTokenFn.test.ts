import { createPeekTokenFn } from './createPeekTokenFn';
import { fakeTokenStream } from '../../../test/fakes/fakeTokenStream';

function run() {
  const tokenStream = fakeTokenStream();
  const peekFn = createPeekTokenFn(tokenStream);
  const returnValue = peekFn();
  return { tokenStream, peekFn, returnValue };
}

describe('createPeekTokenFn', () => {
  beforeEach(run);

  test('exports a function called createPeekTokenFn', () => {
    expect(createPeekTokenFn).toBeInstanceOf(Function);
  });

  test('returns peek function', () => {
    const { peekFn } = run();
    expect(peekFn).toBeInstanceOf(Function);
  });

  describe('when calling peek function', () => {
    test('calls TokenStream.peek', () => {
      const { tokenStream } = run();
      expect(tokenStream.peek).toHaveBeenCalledWith();
    });

    test('returns return value of TokenStream.peek', () => {
      const { returnValue } = run();
      expect(returnValue).toBe('{{TOKEN}}');
    });
  });
});
