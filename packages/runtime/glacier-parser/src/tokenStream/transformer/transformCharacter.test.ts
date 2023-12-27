import { transformCharacter } from './transformCharacter';
import { fakeCharacterStream } from '../../../test/fakes/fakeCharacterStream';
import { transformUnknown } from './tokens/unknown/transformUnknown';
import { isLineTerminator } from '../checks/isLineTerminator';
import { transformLineTerminator } from './tokens/lineTerminator/transformLineTerminator';
import { isWhitespace } from '../checks/isWhitespace';
import { transformWhitespace } from './tokens/whitespace/transformWhitespace';
import { isString } from '../checks/isString';
import { transformString } from './tokens/string/transformString';
import { isNumber } from '../checks/isNumber';
import { transformNumeric } from './tokens/numeric/transformNumeric';
import { isSymbol } from '../checks/isSymbol';
import { transformPunctuation } from './tokens/punctuation/transformPunctuation';
import { isIdentifier } from '../checks/isIdentifier';
import { transformIdentifier } from './tokens/identifier/transformIdentifier';
import { transformSingleLineComment } from './tokens/comment/transformSingleLineComment';
import { transformMultiLineComment } from './tokens/comment/transformMultiLineComment';

jest.mock('./tokens/unknown/transformUnknown', () => ({
  transformUnknown: jest.fn().mockReturnValue('{{UNKNOWN}}')
}));

jest.mock('../checks/isLineTerminator', () => ({
  isLineTerminator: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isWhitespace', () => ({
  isWhitespace: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isString', () => ({
  isString: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isNumber', () => ({
  isNumber: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isSymbol', () => ({
  isSymbol: jest.fn().mockReturnValue(false)
}));

jest.mock('../checks/isIdentifier', () => ({
  isIdentifier: jest.fn().mockReturnValue(false)
}));

jest.mock('./tokens/lineTerminator/transformLineTerminator', () => ({
  transformLineTerminator: jest.fn().mockReturnValue('{{LINE_TERMINATOR}}')
}));

jest.mock('./tokens/whitespace/transformWhitespace', () => ({
  transformWhitespace: jest.fn().mockReturnValue('{{WHITESPACE}}')
}));

jest.mock('./tokens/string/transformString', () => ({
  transformString: jest.fn().mockReturnValue('{{STRING}}')
}));

jest.mock('./tokens/numeric/transformNumeric', () => ({
  transformNumeric: jest.fn().mockReturnValue('{{NUMERIC}}')
}));

jest.mock('./tokens/punctuation/transformPunctuation', () => ({
  transformPunctuation: jest.fn().mockReturnValue('{{PUNCTUATION}}')
}));

jest.mock('./tokens/identifier/transformIdentifier', () => ({
  transformIdentifier: jest.fn().mockReturnValue('{{IDENTIFIER}}')
}));

jest.mock('./tokens/comment/transformSingleLineComment', () => ({
  transformSingleLineComment: jest
    .fn()
    .mockReturnValue('{{SINGLE_LINE_COMMENT}}')
}));

jest.mock('./tokens/comment/transformMultiLineComment', () => ({
  transformMultiLineComment: jest.fn().mockReturnValue('{{MULTI_LINE_COMMENT}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithEndOfStream() {
  const characterStream = fakeCharacterStream();
  (characterStream.peek as jest.Mock).mockReturnValueOnce(void 0);
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithLineTerminator() {
  (isLineTerminator as jest.Mock).mockReturnValueOnce(true);
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithWhitespace() {
  (isWhitespace as jest.Mock).mockReturnValueOnce(true);
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithString() {
  (isString as jest.Mock).mockReturnValueOnce(true);
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithNumeric() {
  (isNumber as jest.Mock).mockReturnValueOnce(true);
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithPunctuation() {
  (isSymbol as jest.Mock).mockReturnValueOnce(true);
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithIdentifier() {
  (isIdentifier as jest.Mock).mockReturnValueOnce(true);
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithDot() {
  const characterStream = fakeCharacterStream();
  (characterStream.peek as jest.Mock).mockReturnValueOnce('.');
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithDotAndNumber() {
  (isNumber as jest.Mock).mockReturnValueOnce(false).mockReturnValueOnce(true);
  const characterStream = fakeCharacterStream();
  (characterStream.peek as jest.Mock).mockReturnValueOnce('.');
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithSlash() {
  const characterStream = fakeCharacterStream();
  (characterStream.peek as jest.Mock).mockReturnValueOnce('/');
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithSlashAndSlash() {
  const characterStream = fakeCharacterStream();
  (characterStream.peek as jest.Mock)
    .mockReturnValueOnce('/')
    .mockReturnValueOnce('/');
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

function runWithSlashAndAsterisk() {
  const characterStream = fakeCharacterStream();
  (characterStream.peek as jest.Mock)
    .mockReturnValueOnce('/')
    .mockReturnValueOnce('*');
  const returnValue = transformCharacter(characterStream);
  return { returnValue, characterStream };
}

describe('transformCharacter', () => {
  beforeEach(run);

  test('exports a function called transformCharacter', () => {
    expect(transformCharacter).toBeInstanceOf(Function);
  });

  test('calls characterStream.peek', () => {
    const { characterStream } = run();
    expect(characterStream.peek).toHaveBeenCalledWith();
  });

  test('calls isLineTerminator', () => {
    expect(isLineTerminator).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isWhitespace', () => {
    expect(isWhitespace).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isString', () => {
    expect(isString).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isNumber', () => {
    expect(isNumber).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isSymbol', () => {
    expect(isSymbol).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isIdentifier', () => {
    expect(isIdentifier).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls transformUnknown', () => {
    const { characterStream } = run();
    expect(transformUnknown).toHaveBeenCalledWith(characterStream);
  });

  test('returns return value of transformUnknown', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{UNKNOWN}}');
  });

  describe('if characterStream.peek return undefined', () => {
    test('returns undefined', () => {
      const { returnValue } = runWithEndOfStream();
      expect(returnValue).toBeUndefined();
    });
  });

  describe('if isLineTerminator returns true', () => {
    test('calls transformLineTerminator', () => {
      const { characterStream } = runWithLineTerminator();
      expect(transformLineTerminator).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformLineTerminator', () => {
      const { returnValue } = runWithLineTerminator();
      expect(returnValue).toBe('{{LINE_TERMINATOR}}');
    });
  });

  describe('if isWhitespace returns true', () => {
    test('calls transformWhitespace', () => {
      const { characterStream } = runWithWhitespace();
      expect(transformWhitespace).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformWhitespace', () => {
      const { returnValue } = runWithWhitespace();
      expect(returnValue).toBe('{{WHITESPACE}}');
    });
  });

  describe('if isString returns true', () => {
    test('calls transformString', () => {
      const { characterStream } = runWithString();
      expect(transformString).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformString', () => {
      const { returnValue } = runWithString();
      expect(returnValue).toBe('{{STRING}}');
    });
  });

  describe('if isNumeric returns true', () => {
    test('calls transformNumeric', () => {
      const { characterStream } = runWithNumeric();
      expect(transformNumeric).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformNumeric', () => {
      const { returnValue } = runWithNumeric();
      expect(returnValue).toBe('{{NUMERIC}}');
    });
  });

  describe('if isSymbol returns true', () => {
    test('calls transformPunctuation', () => {
      const { characterStream } = runWithPunctuation();
      expect(transformPunctuation).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformPunctuation', () => {
      const { returnValue } = runWithPunctuation();
      expect(returnValue).toBe('{{PUNCTUATION}}');
    });
  });

  describe('if isIdentifier returns true', () => {
    test('calls transformIdentifier', () => {
      const { characterStream } = runWithIdentifier();
      expect(transformIdentifier).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformIdentifier', () => {
      const { returnValue } = runWithIdentifier();
      expect(returnValue).toBe('{{IDENTIFIER}}');
    });
  });

  describe('if nextChar is a dot', () => {
    beforeEach(runWithDot);

    test('calls characterStream.peek', () => {
      const { characterStream } = runWithDot();
      expect(characterStream.peek).toHaveBeenCalledWith(1);
    });

    test('calls isNumber', () => {
      expect(isNumber).toHaveBeenCalledWith('{{CHAR}}');
    });

    describe('if second character is a number', () => {
      test('calls transformNumeric', () => {
        const { characterStream } = runWithDotAndNumber();
        expect(transformNumeric).toHaveBeenCalledWith(characterStream);
      });

      test('returns return value of transformNumeric', () => {
        const { returnValue } = runWithDotAndNumber();
        expect(returnValue).toBe('{{NUMERIC}}');
      });
    });
  });

  describe('if next character is a slash', () => {
    beforeEach(runWithSlash);

    test('calls characterStream.peek', () => {
      const { characterStream } = runWithSlash();
      expect(characterStream.peek).toHaveBeenCalledWith(1);
    });

    describe('if second character is a slash', () => {
      beforeEach(runWithSlashAndSlash);

      test('calls transformSingleLineComment', () => {
        const { characterStream } = runWithSlashAndSlash();
        expect(transformSingleLineComment).toHaveBeenCalledWith(
          characterStream
        );
      });

      test('returns return value of transformSingleLineComment', () => {
        const { returnValue } = runWithSlashAndSlash();
        expect(returnValue).toBe('{{SINGLE_LINE_COMMENT}}');
      });
    });

    describe('if second character is a asterisk', () => {
      beforeEach(runWithSlashAndAsterisk);

      test('calls transformMultiLineComment', () => {
        const { characterStream } = runWithSlashAndAsterisk();
        expect(transformMultiLineComment).toHaveBeenCalledWith(characterStream);
      });

      test('returns return value of transformMultiLineComment', () => {
        const { returnValue } = runWithSlashAndAsterisk();
        expect(returnValue).toBe('{{MULTI_LINE_COMMENT}}');
      });
    });
  });
});
