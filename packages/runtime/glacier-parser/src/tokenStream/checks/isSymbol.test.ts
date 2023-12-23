import { isSymbol } from './isSymbol';

function run(char = '&') {
  const returnValue = isSymbol(char);
  return { returnValue };
}

describe('isSymbol', () => {
  beforeEach(run);

  test('exports a function called isSymbol', () => {
    expect(isSymbol).toBeInstanceOf(Function);
  });

  test.each([
    '+',
    '-',
    '*',
    '/',
    '%',
    '=',
    '>',
    '<',
    '&',
    '!',
    '?',
    ':',
    '|',
    ';',
    ',',
    '.',
    '(',
    ')',
    '{',
    '}',
    '[',
    ']',
    '"',
    "'",
    '`'
  ])('returns true if character equals to "%s"', (char) => {
    const { returnValue } = run(char);
    expect(returnValue).toBe(true);
  });

  test('returns false if character is not a symbol', () => {
    const { returnValue } = run('b');
    expect(returnValue).toBe(false);
  });
});
