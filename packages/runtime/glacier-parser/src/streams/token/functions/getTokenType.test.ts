import { getTokenType } from './getTokenType';
import { WHITESPACES } from '../constants/WHITESPACES';
import { LINE_TERMINATORS } from '../constants/LINE_TERMINATORS';
import { DIGITS } from '../constants/DIGITS';
import { SYMBOLS } from '../constants/SYMBOLS';

jest.mock('../constants/DIGITS', () => ({ DIGITS: { has: jest.fn() } }));
jest.mock('../constants/LINE_TERMINATORS', () => ({
  LINE_TERMINATORS: { has: jest.fn() }
}));
jest.mock('../constants/SYMBOLS', () => ({ SYMBOLS: { has: jest.fn() } }));
jest.mock('../constants/WHITESPACES', () => ({
  WHITESPACES: { has: jest.fn() }
}));

function run(codePoint = 0) {
  const returnValue = getTokenType(codePoint);
  return { returnValue };
}

describe('getTokenType', () => {
  beforeEach(run);

  test('exports a function called getTokenType', () => {
    expect(getTokenType).toBeInstanceOf(Function);
  });

  test('calls WHITESPACES.has', () => {
    expect(WHITESPACES.has).toHaveBeenCalledWith(0);
  });

  test('calls LINE_TERMINATORS.has', () => {
    expect(LINE_TERMINATORS.has).toHaveBeenCalledWith(0);
  });

  test('calls DIGITS.has', () => {
    expect(DIGITS.has).toHaveBeenCalledWith(0);
  });

  test('calls isSymbol', () => {
    expect(SYMBOLS.has).toHaveBeenCalledWith(0);
  });

  test('return "TEXT', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('TEXT');
  });

  describe('if WHITESPACES.has returns true', () => {
    test('return "WHITESPACE', () => {
      (WHITESPACES.has as jest.Mock).mockReturnValueOnce(true);
      const { returnValue } = run();
      expect(returnValue).toBe('WHITESPACE');
    });
  });

  describe('if LINE_TERMINATORS.has returns true', () => {
    test('return "LINE_TERMINATOR"', () => {
      (LINE_TERMINATORS.has as jest.Mock).mockReturnValueOnce(true);
      const { returnValue } = run();
      expect(returnValue).toBe('LINE_TERMINATOR');
    });
  });

  describe('if DIGITS.has returns true', () => {
    test('return "NUMBER', () => {
      (DIGITS.has as jest.Mock).mockReturnValueOnce(true);
      const { returnValue } = run();
      expect(returnValue).toBe('NUMBER');
    });
  });

  describe('if SYMBOLS.has returns true', () => {
    test('return "SYMBOL', () => {
      (SYMBOLS.has as jest.Mock).mockReturnValueOnce(true);
      const { returnValue } = run();
      expect(returnValue).toBe('SYMBOL');
    });
  });
});
