import { patternKeyCompare } from './patternKeyCompare';
import { assertPatternKeyValid } from '../assertions/assertPatternKeyValid';
import { getKeyBaseLength } from './getKeyBaseLength';

jest.mock('../assertions/assertPatternKeyValid', () => ({
  assertPatternKeyValid: jest.fn()
}));

jest.mock('./getKeyBaseLength', () => ({
  getKeyBaseLength: jest.fn().mockReturnValue(0)
}));

function run(a = '{{A}}/*', b = '{{B}}/*') {
  const returnValue = patternKeyCompare(a, b);
  return { returnValue };
}

describe('patternKeyCompare', () => {
  beforeEach(run);

  test('exports a function called patternKeyCompare', () => {
    expect(patternKeyCompare).toBeInstanceOf(Function);
  });

  test('calls assertPatternKeyValid', () => {
    expect(assertPatternKeyValid).toHaveBeenCalledWith('{{A}}/*');
    expect(assertPatternKeyValid).toHaveBeenCalledWith('{{B}}/*');
  });

  test('calls getKeyBaseLength', () => {
    expect(getKeyBaseLength).toHaveBeenCalledWith('{{A}}/*');
    expect(getKeyBaseLength).toHaveBeenCalledWith('{{B}}/*');
  });

  test('returns 0', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(0);
  });

  describe('if baseLengthA > baseLengthB', () => {
    test('return -1', () => {
      (getKeyBaseLength as jest.Mock)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(0);
      const { returnValue } = run();
      expect(returnValue).toBe(-1);
    });
  });

  describe('if baseLengthB > baseLengthA', () => {
    test('return 1', () => {
      (getKeyBaseLength as jest.Mock)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1);
      const { returnValue } = run();
      expect(returnValue).toBe(1);
    });
  });

  describe('if keyA does not have a wildcard', () => {
    test('return 1', () => {
      const { returnValue } = run('a', 'b');
      expect(returnValue).toBe(1);
    });
  });

  describe('if keyB does not have a wildcard', () => {
    test('return 1', () => {
      const { returnValue } = run('a/*', 'b');
      expect(returnValue).toBe(-1);
    });
  });

  describe('if keyA is longer then keyB', () => {
    test('return -1', () => {
      const { returnValue } = run('a/b/*', 'a/*');
      expect(returnValue).toBe(-1);
    });
  });

  describe('if keyB is longer then keyA', () => {
    test('return -1', () => {
      const { returnValue } = run('a/*', 'a/b/*');
      expect(returnValue).toBe(1);
    });
  });
});
