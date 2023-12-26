import { consumeUntil } from '../../../functions/consumeUntil';
import type { NumericToken } from '../../../interfaces/tokens/NumericToken';
import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import { whileHexadecimal } from '../../../checks/whileHexadecimal';

export function transformHexadecimal(
  characterStream: CharacterStream
): NumericToken {
  const prefix = `0${characterStream.next()}`;
  const consumedValue = consumeUntil(characterStream, whileHexadecimal);
  return {
    type: 'NUMERIC',
    value: `${prefix}${consumedValue}`
  };
}
