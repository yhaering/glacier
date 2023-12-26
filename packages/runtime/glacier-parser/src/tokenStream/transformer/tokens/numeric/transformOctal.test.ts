import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { consumeUntil } from '../../../functions/consumeUntil';
import { transformOctal } from './transformOctal';
import { whileOctal } from '../../../checks/whileOctal';

jest.mock('../../../checks/whileOctal', () => ({
  whileOctal: jest.fn().mockReturnValue('{{WHILE_OCTAL}}')
}));

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformOctal(characterStream);
  return { returnValue, characterStream };
}

describe('transformOctal', () => {
  beforeEach(run);

  test('exports a function called transformOctal', () => {
    expect(transformOctal).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(characterStream, whileOctal);
  });

  test('returns NumericToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'NUMERIC',
      value: `0{{CHAR}}{{CONSUMED_VALUE}}`
    });
  });
});
