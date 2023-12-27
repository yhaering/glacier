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
});
