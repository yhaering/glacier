import { whileBinary } from './whileBinary';

function run(char = '', consumedChars = '') {
  const returnValue = whileBinary(char, consumedChars);
  return { returnValue };
}

describe('whileBinary', () => {
  beforeEach(run);

  test('exports a function called whileBinary', () => {
    expect(whileBinary).toBeInstanceOf(Function);
  });

  test.each(['0', '1', '_', 'n'])('returns true if char is %s', (char) => {
    const { returnValue } = run(char);
    expect(returnValue).toBe(true);
  });

  test('returns false if char is not binary', () => {
    const { returnValue } = run('3');
    expect(returnValue).toBe(false);
  });

  describe('if last character is n', () => {
    test('returns false', () => {
      const { returnValue } = run('0', '0n');
      expect(returnValue).toBe(false);
    });
  });
});
