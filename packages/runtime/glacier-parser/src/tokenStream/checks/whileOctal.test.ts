import { whileOctal } from './whileOctal';

function run(char = '', consumedChars = '') {
  const returnValue = whileOctal(char, consumedChars);
  return { returnValue };
}

describe('whileOctal', () => {
  beforeEach(run);

  test('exports a function called whileBinary', () => {
    expect(whileOctal).toBeInstanceOf(Function);
  });

  test.each(['0', '1', '2', '3', '4', '5', '6', '7', 'n', '_'])(
    'returns true if char is %s',
    (char) => {
      const { returnValue } = run(char);
      expect(returnValue).toBe(true);
    }
  );

  test('returns false if char is not octal', () => {
    const { returnValue } = run('8');
    expect(returnValue).toBe(false);
  });

  describe('if last character is n', () => {
    test('returns false', () => {
      const { returnValue } = run('0', '0n');
      expect(returnValue).toBe(false);
    });
  });
});
