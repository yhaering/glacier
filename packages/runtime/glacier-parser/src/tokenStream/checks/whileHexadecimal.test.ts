import { whileHexadecimal } from './whileHexadecimal';

function run(char = '', consumedChars = '') {
  const returnValue = whileHexadecimal(char, consumedChars);
  return { returnValue };
}

describe('whileHexadecimal', () => {
  beforeEach(run);

  test('exports a function called whileBinary', () => {
    expect(whileHexadecimal).toBeInstanceOf(Function);
  });

  test.each([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'n',
    '_'
  ])('returns true if char is %s', (char) => {
    const { returnValue } = run(char);
    expect(returnValue).toBe(true);
  });

  test('returns false if char is not binary', () => {
    const { returnValue } = run('l');
    expect(returnValue).toBe(false);
  });

  describe('if last character is n', () => {
    test('returns false', () => {
      const { returnValue } = run('0', '0n');
      expect(returnValue).toBe(false);
    });
  });
});
