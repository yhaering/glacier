import { createNextTokenFn } from './createNextTokenFn';
import { fakeTokenStream } from '../../../test/fakes/fakeTokenStream';
import { fakePositionContext } from '../../../test/fakes/fakePositionContext';

function run() {
  const tokenStream = fakeTokenStream();
  const positionContext = fakePositionContext();
  const nextFn = createNextTokenFn(tokenStream, positionContext);
  const returnValue = nextFn();
  return { nextFn, returnValue, tokenStream, positionContext };
}

describe('createNextTokenFn', () => {
  beforeEach(run);

  test('exports a function called createNextTokenFn', () => {
    expect(createNextTokenFn).toBeInstanceOf(Function);
  });

  test('returns a next function', () => {
    const { nextFn } = run();
    expect(nextFn).toBeInstanceOf(Function);
  });

  describe('when calling next function', () => {
    test('calls TokenStream.next', () => {
      const { tokenStream } = run();
      expect(tokenStream.next).toHaveBeenCalledWith();
    });

    test('calls PositionContext.consume', () => {
      const { positionContext } = run();
      expect(positionContext.consume).toHaveBeenCalledWith('{{TOKEN}}');
    });

    test('returns return value of TokenStream.next', () => {
      const { returnValue } = run();
      expect(returnValue).toBe('{{TOKEN}}');
    });
  });
});
