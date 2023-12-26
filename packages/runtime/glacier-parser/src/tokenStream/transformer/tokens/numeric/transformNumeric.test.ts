import { transformNumeric } from './transformNumeric';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { isHexadecimal } from '../../../checks/isHexadecimal';
import { isOctal } from '../../../checks/isOctal';
import { isBinary } from '../../../checks/isBinary';
import { transformDecimal } from './transformDecimal';
import { transformHexadecimal } from './transformHexadecimal';
import { transformOctal } from './transformOctal';
import { transformBinary } from './transformBinary';

jest.mock('../../../checks/isHexadecimal', () => ({
  isHexadecimal: jest.fn().mockReturnValue(false)
}));

jest.mock('../../../checks/isOctal', () => ({
  isOctal: jest.fn().mockReturnValue(false)
}));

jest.mock('../../../checks/isBinary', () => ({
  isBinary: jest.fn().mockReturnValue(false)
}));

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

jest.mock('./transformDecimal', () => ({
  transformDecimal: jest.fn().mockReturnValue('{{DECIMAL}}')
}));

jest.mock('./transformHexadecimal', () => ({
  transformHexadecimal: jest.fn().mockReturnValue('{{HEXADECIMAL}}')
}));

jest.mock('./transformOctal', () => ({
  transformOctal: jest.fn().mockReturnValue('{{OCTAL}}')
}));

jest.mock('./transformBinary', () => ({
  transformBinary: jest.fn().mockReturnValue('{{BINARY}}')
}));

function run(char = '0') {
  const characterStream = fakeCharacterStream();
  (characterStream.next as jest.Mock).mockReturnValue(char);
  const returnValue = transformNumeric(characterStream);
  return { returnValue, characterStream };
}

function runWithHexadecimal() {
  (isHexadecimal as jest.Mock).mockReturnValueOnce(true);
  return run('0');
}

function runWithOctal() {
  (isOctal as jest.Mock).mockReturnValueOnce(true);
  return run('0');
}

function runWithBinary() {
  (isBinary as jest.Mock).mockReturnValueOnce(true);
  return run('0');
}

function runWithDecimalDot() {
  const characterStream = fakeCharacterStream();
  (characterStream.next as jest.Mock).mockReturnValue('0');
  (characterStream.peek as jest.Mock).mockReturnValue('.');
  const returnValue = transformNumeric(characterStream);
  return { returnValue, characterStream };
}

describe('transformNumeric', () => {
  beforeEach(run);

  test('exports a function called transformNumeric', () => {
    expect(transformNumeric).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenNthCalledWith(1);
  });

  test('calls characterStream.peek', () => {
    const { characterStream } = run();
    expect(characterStream.peek).toHaveBeenNthCalledWith(1);
  });

  test('calls isHexadecimal', () => {
    expect(isHexadecimal).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isOctal', () => {
    expect(isOctal).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('calls isBinary', () => {
    expect(isBinary).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('returns NumericToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'NUMERIC',
      value: '0'
    });
  });

  describe('if first character is not a 0', () => {
    test('calls transformDecimal', () => {
      const { characterStream } = run('1');
      expect(transformDecimal).toHaveBeenCalledWith(characterStream, '1');
    });

    test('returns return value of transformDecimal', () => {
      const { returnValue } = run('1');
      expect(returnValue).toBe('{{DECIMAL}}');
    });
  });

  describe('if isHexadecimal is true', () => {
    test('calls transformHexadecimal', () => {
      const { characterStream } = runWithHexadecimal();
      expect(transformHexadecimal).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformHexadecimal', () => {
      const { returnValue } = runWithHexadecimal();
      expect(returnValue).toBe('{{HEXADECIMAL}}');
    });
  });

  describe('if isOctal is true', () => {
    test('calls transformOctal', () => {
      const { characterStream } = runWithOctal();
      expect(transformOctal).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformOctal', () => {
      const { returnValue } = runWithOctal();
      expect(returnValue).toBe('{{OCTAL}}');
    });
  });

  describe('if isBinary is true', () => {
    test('calls transformBinary', () => {
      const { characterStream } = runWithBinary();
      expect(transformBinary).toHaveBeenCalledWith(characterStream);
    });

    test('returns return value of transformBinary', () => {
      const { returnValue } = runWithBinary();
      expect(returnValue).toBe('{{BINARY}}');
    });
  });

  describe('if second character is a dot', () => {
    test('calls transformDecimal', () => {
      const { characterStream } = runWithDecimalDot();
      expect(transformDecimal).toHaveBeenCalledWith(characterStream, '0');
    });

    test('returns return value of transformDecimal', () => {
      const { returnValue } = runWithDecimalDot();
      expect(returnValue).toBe('{{DECIMAL}}');
    });
  });
});
