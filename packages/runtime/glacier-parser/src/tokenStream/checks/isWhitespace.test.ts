import { isWhitespace } from './isWhitespace';

function run(char = ' ') {
  const returnValue = isWhitespace(char);
  return { returnValue };
}

describe('isWhitespace', () => {
  beforeEach(run);

  test('exports a function called isWhitespace', () => {
    expect(isWhitespace).toBeInstanceOf(Function);
  });

  test.each([
    '\u0020',
    '\u00A0',
    '\u1680',
    '\u2000',
    '\u2001',
    '\u2002',
    '\u2003',
    '\u2004',
    '\u2005',
    '\u2006',
    '\u2007',
    '\u2008',
    '\u2009',
    '\u200A',
    '\u202F',
    '\u205F',
    '\u3000',
    '\u0009',
    '\u000B',
    '\u000C',
    '\uFEFF'
  ])('returns true if character equals to "%s"', (char) => {
    const { returnValue } = run(char);
    expect(returnValue).toBe(true);
  });

  test('returns false if character is not a whitespace', () => {
    const { returnValue } = run('a');
    expect(returnValue).toBe(false);
  });
});
