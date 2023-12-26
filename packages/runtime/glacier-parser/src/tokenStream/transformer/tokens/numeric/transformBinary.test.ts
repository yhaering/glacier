import { transformBinary } from './transformBinary';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { whileBinary } from '../../../checks/whileBinary';
import { consumeUntil } from '../../../functions/consumeUntil';

jest.mock('../../../checks/whileBinary', () => ({
  whileBinary: jest.fn().mockReturnValue('{{WHILE_BINARY}}')
}));

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformBinary(characterStream);
  return { returnValue, characterStream };
}

describe('transformBinary', () => {
  beforeEach(run);

  test('exports a function called transformBinary', () => {
    expect(transformBinary).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(characterStream, whileBinary);
  });

  test('returns NumericToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'NUMERIC',
      value: `0{{CHAR}}{{CONSUMED_VALUE}}`
    });
  });
});
