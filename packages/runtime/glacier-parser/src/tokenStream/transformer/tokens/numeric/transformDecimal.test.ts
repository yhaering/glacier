import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { transformDecimal } from './transformDecimal';
import { whileDecimal } from '../../../checks/whileDecimal';
import { consumeUntil } from '../../../functions/consumeUntil';

jest.mock('../../../checks/whileDecimal', () => ({
  whileDecimal: jest.fn().mockReturnValue('{{WHILE_DECIMAL}}')
}));

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformDecimal(characterStream, '{{PREFIX}}');
  return { returnValue, characterStream };
}

describe('transformDecimal', () => {
  beforeEach(run);

  test('exports a function called transformDecimal', () => {
    expect(transformDecimal).toBeInstanceOf(Function);
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(
      characterStream,
      whileDecimal,
      '{{PREFIX}}'
    );
  });

  test('returns NumericLiteral', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'NUMERIC',
      value: '{{CONSUMED_VALUE}}'
    });
  });
});
