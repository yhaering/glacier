import { whileSingleLineComment } from './whileSingleLineComment';
import { isLineTerminator } from './isLineTerminator';

jest.mock('./isLineTerminator', () => ({
  isLineTerminator: jest.fn().mockReturnValue(true)
}));

function run(char = '{{CHAR}}') {
  const returnValue = whileSingleLineComment(char);
  return { returnValue };
}

describe('whileSingleLineComment', () => {
  beforeEach(run);

  test('exports a function called whileSingleLineComment', () => {
    expect(whileSingleLineComment).toBeInstanceOf(Function);
  });

  test('calls isLineTerminator', () => {
    expect(isLineTerminator).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('returns negated return value of isLineTerminator', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(false);
  });
});
