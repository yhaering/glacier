import { isLineTerminator } from './isLineTerminator';

function run(char = '\n') {
  const returnValue = isLineTerminator(char);
  return { returnValue };
}

describe('isLineTerminator', () => {
  beforeEach(run);

  test('exports a function called isLineTerminator', () => {
    expect(isLineTerminator).toBeInstanceOf(Function);
  });

  test.each(['\u000A', '\u000D', '\u2028', '\u2029'])(
    'returns true if character equals to "%s"',
    (char) => {
      const { returnValue } = run(char);
      expect(returnValue).toBe(true);
    }
  );

  test('returns false if character is not a new line', () => {
    const { returnValue } = run('b');
    expect(returnValue).toBe(false);
  });
});
