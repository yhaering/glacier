import { transformString } from './transformString';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileString } from '../../../checks/whileString';
import { whileTemplateString } from '../../../checks/whileTemplateString';

jest.mock('../../../checks/whileString', () => ({
  whileString: jest.fn().mockReturnValue('{{WHILE_STRING}}')
}));

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

jest.mock('../../../checks/whileTemplateString', () => ({
  whileTemplateString: jest.fn().mockReturnValue('{{WHILE_TEMPLATE_STRING}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  (characterStream.next as jest.Mock).mockReturnValue('"');
  const returnValue = transformString(characterStream);
  return { returnValue, characterStream };
}

function runWithSingleQuote() {
  const characterStream = fakeCharacterStream();
  (characterStream.next as jest.Mock).mockReturnValue("'");
  const returnValue = transformString(characterStream);
  return { returnValue, characterStream };
}

function runWithTemplateQuote() {
  const characterStream = fakeCharacterStream();
  (characterStream.next as jest.Mock).mockReturnValue('`');
  const returnValue = transformString(characterStream);
  return { returnValue, characterStream };
}

describe('transformString', () => {
  beforeEach(run);

  test('exports a function called transformString', () => {
    expect(transformString).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('calls whileString', () => {
    expect(whileString).toHaveBeenCalledWith('"');
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(
      characterStream,
      '{{WHILE_STRING}}'
    );
  });

  test('calls characterStream.next again to consume end end symbol', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledTimes(2);
  });

  test('returns StringToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'STRING',
      stringType: 'DOUBLE',
      value: '{{CONSUMED_VALUE}}'
    });
  });

  describe('if next character is a single quote', () => {
    test('returns StringToken', () => {
      const { returnValue } = runWithSingleQuote();
      expect(returnValue).toEqual({
        type: 'STRING',
        stringType: 'SINGLE',
        value: '{{CONSUMED_VALUE}}'
      });
    });
  });

  describe('if next character is a template quote', () => {
    test('calls consumeUntil', () => {
      const { characterStream } = runWithTemplateQuote();
      expect(consumeUntil).toHaveBeenCalledWith(
        characterStream,
        whileTemplateString
      );
    });

    test('returns StringToken', () => {
      const { returnValue } = runWithTemplateQuote();
      expect(returnValue).toEqual({
        type: 'STRING',
        stringType: 'TEMPLATE',
        value: '{{CONSUMED_VALUE}}'
      });
    });

    test('calls characterStream.next again to consume end end symbol', () => {
      const { characterStream } = run();
      expect(characterStream.next).toHaveBeenCalledTimes(2);
    });
  });
});
