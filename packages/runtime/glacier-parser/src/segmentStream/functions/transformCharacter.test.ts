import { transformCharacter } from './transformCharacter';
import { createSegment } from '../factories/createSegment';
import { isWhitespace } from '../checks/isWhitespace';
import { isNewLine } from '../checks/isNewLine';
import { isNumber } from '../checks/isNumber';
import { isSymbol } from '../checks/isSymbol';

jest.mock('../checks/isWhitespace', () => ({
  isWhitespace: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isNewLine', () => ({
  isNewLine: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isNumber', () => ({
  isNumber: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isSymbol', () => ({
  isSymbol: jest.fn().mockReturnValue(false)
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

  test('calls isWhitespace', () => {
    expect(isWhitespace).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isNewLine', () => {
    expect(isNewLine).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('isNumber', () => {
    expect(isNumber).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('isSymbol', () => {
    expect(isSymbol).toHaveBeenCalledWith('{{CHAR}}');
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
      (isWhitespace as jest.Mock).mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('WHITESPACE', '{{CHAR}}');
    });
  });

  describe('if character is a NEW_LINE', () => {
    beforeEach(() => {
      (isNewLine as jest.Mock).mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('NEW_LINE', '{{CHAR}}');
    });
  });

  describe('if character is a NUMBERS', () => {
    beforeEach(() => {
      (isNumber as jest.Mock).mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('NUMBER', '{{CHAR}}');
    });
  });

  describe('if character is a SYMBOLS', () => {
    beforeEach(() => {
      (isSymbol as jest.Mock).mockReturnValueOnce(true);
      run();
    });

    test('calls createSegment', () => {
      expect(createSegment).toHaveBeenCalledWith('SYMBOL', '{{CHAR}}');
    });
  });
});
