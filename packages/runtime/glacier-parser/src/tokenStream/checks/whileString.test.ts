import { whileString } from './whileString';
import { isLineTerminator } from './isLineTerminator';

jest.mock('./isLineTerminator', () => ({
  isLineTerminator: jest.fn().mockReturnValue(false)
}));

function run(char = '{{CHAR}}', separator: '"' | "'" | '`' = "'") {
  const returnValue = whileString(separator)(char);
  return { returnValue };
}

function runWithLineTerminator(
  char = '{{CHAR}}',
  separator: '"' | "'" | '`' = "'"
) {
  (isLineTerminator as jest.Mock).mockReturnValueOnce(true);
  return run(char, separator);
}

describe('whileString', () => {
  beforeEach(run);

  test('exports a function called whileString', () => {
    expect(whileString).toBeInstanceOf(Function);
  });

  test('returns true', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('calls isLineTerminator', () => {
    expect(isLineTerminator).toHaveBeenCalledWith('{{CHAR}}');
  });

  describe('if isLineTerminator', () => {
    test('returns false', () => {
      const { returnValue } = runWithLineTerminator();
      expect(returnValue).toBe(false);
    });
  });

  describe('if char equals to separator', () => {
    test('returns false', () => {
      const { returnValue } = run('"', '"');
      expect(returnValue).toBe(false);
    });
  });
});
