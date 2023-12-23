import { isNewLine } from './isNewLine';

function run(char = '\n') {
  const returnValue = isNewLine(char);
  return { returnValue };
}

describe('isNewLine', () => {
  beforeEach(run);

  test('exports a function called isNewLine', () => {
    expect(isNewLine).toBeInstanceOf(Function);
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
