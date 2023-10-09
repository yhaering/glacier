import { transformCharacter } from './transformCharacter';
import { WHITESPACES } from '../constants/WHITESPACES';
import { NEW_LINES } from '../constants/NEW_LINES';
import { NUMBERS } from '../constants/NUMBERS';
import { SYMBOLS } from '../constants/SYMBOLS';
import { createSegment } from '../factories/createSegment';

jest.mock('../constants/WHITESPACES', () => ({
  WHITESPACES: {
    has: jest.fn()
  }
}));

jest.mock('../constants/NEW_LINES', () => ({
  NEW_LINES: {
    has: jest.fn()
  }
}));

jest.mock('../constants/SYMBOLS', () => ({
  SYMBOLS: {
    has: jest.fn()
  }
}));

jest.mock('../constants/NUMBERS', () => ({
  NUMBERS: {
    has: jest.fn()
  }
}));

jest.mock('../factories/createSegment', () => ({
  createSegment: jest.fn().mockReturnValue('{{SEGMENT}}')
}));

function run() {
  const returnValue = transformCharacter('{{CHAR}}');
  return { returnValue };
}

describe('transformCharacter', () => {
  beforeEach(run);

  test('exports a function called transformCharacter', () => {
    expect(transformCharacter).toBeInstanceOf(Function);
  });

  test('calls WHITESPACES.has', () => {
    expect(WHITESPACES.has).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls NEW_LINES.has', () => {
    expect(NEW_LINES.has).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls NUMBERS.has', () => {
    expect(NUMBERS.has).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls SYMBOLS.has', () => {
    expect(SYMBOLS.has).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls createSegment', () => {
    expect(createSegment).toHaveBeenCalledWith('LITERAL', '{{CHAR}}');
  });

  test('returns Segment', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{SEGMENT}}');
  });

  describe('if character is a whitespace', () => {
    beforeEach(() => {
      jest.spyOn(WHITESPACES, 'has').mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('WHITESPACE', '{{CHAR}}');
    });
  });

  describe('if character is a NEW_LINE', () => {
    beforeEach(() => {
      jest.spyOn(NEW_LINES, 'has').mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('NEW_LINE', '{{CHAR}}');
    });
  });

  describe('if character is a NUMBERS', () => {
    beforeEach(() => {
      jest.spyOn(NUMBERS, 'has').mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('NUMBER', '{{CHAR}}');
    });
  });

  describe('if character is a SYMBOLS', () => {
    beforeEach(() => {
      jest.spyOn(SYMBOLS, 'has').mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('SYMBOL', '{{CHAR}}');
    });
  });
});
