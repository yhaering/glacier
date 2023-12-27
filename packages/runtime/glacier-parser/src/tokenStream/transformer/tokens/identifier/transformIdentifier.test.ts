import { transformIdentifier } from './transformIdentifier';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileIdentifier } from '../../../checks/whileIdentifier';

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformIdentifier(characterStream);
  return { returnValue, characterStream };
}

function runWithKeyword() {
  (consumeUntil as jest.Mock).mockReturnValueOnce('await');
  return run();
}

function runWithBoolean() {
  (consumeUntil as jest.Mock).mockReturnValueOnce('true');
  return run();
}

function runWithNull() {
  (consumeUntil as jest.Mock).mockReturnValueOnce('null');
  return run();
}

describe('transformIdentifier', () => {
  beforeEach(run);

  test('exports a function called transformIdentifier', () => {
    expect(transformIdentifier).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(
      characterStream,
      whileIdentifier,
      '{{CHAR}}'
    );
  });

  test('returns IdentifierToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'IDENTIFIER',
      value: '{{CONSUMED_VALUE}}'
    });
  });

  describe('if identifier is a keyword', () => {
    test('returns KeywordToken', () => {
      const { returnValue } = runWithKeyword();
      expect(returnValue).toEqual({
        type: 'KEYWORD',
        value: 'await'
      });
    });
  });

  describe('if identifier is a boolean', () => {
    test('returns KeywordToken', () => {
      const { returnValue } = runWithBoolean();
      expect(returnValue).toEqual({
        type: 'BOOLEAN',
        value: 'true'
      });
    });
  });

  describe('if identifier is null', () => {
    test('returns NullToken', () => {
      const { returnValue } = runWithNull();
      expect(returnValue).toEqual({
        type: 'NULL',
        value: 'null'
      });
    });
  });
});
