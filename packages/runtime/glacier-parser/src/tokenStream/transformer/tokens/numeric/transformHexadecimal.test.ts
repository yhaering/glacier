import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { consumeUntil } from '../../../functions/consumeUntil';
import { transformHexadecimal } from './transformHexadecimal';
import { whileHexadecimal } from '../../../checks/whileHexadecimal';

jest.mock('../../../checks/whileHexadecimal', () => ({
  whileHexadecimal: jest.fn().mockReturnValue('{{WHILE_HEXADECIMAL}}')
}));

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformHexadecimal(characterStream);
  return { returnValue, characterStream };
}

describe('transformHexadecimal', () => {
  beforeEach(run);

  test('exports a function called transformHexadecimal', () => {
    expect(transformHexadecimal).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(
      characterStream,
      whileHexadecimal
    );
  });

  test('returns NumericToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'NUMERIC',
      value: `0{{CHAR}}{{CONSUMED_VALUE}}`
    });
  });
});
