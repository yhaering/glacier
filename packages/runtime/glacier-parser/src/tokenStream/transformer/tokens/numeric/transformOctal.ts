import { consumeUntil } from '../../../functions/consumeUntil';
import type { NumericToken } from '../../../interfaces/tokens/NumericToken';
import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import { whileOctal } from '../../../checks/whileOctal';

export function transformOctal(characterStream: CharacterStream): NumericToken {
  const prefix = `0${characterStream.next()}`;
  const consumedValue = consumeUntil(characterStream, whileOctal);
  return {
    type: 'NUMERIC',
    value: `${prefix}${consumedValue}`
  };
}
