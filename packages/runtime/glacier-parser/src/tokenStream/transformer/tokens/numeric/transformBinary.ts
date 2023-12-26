import { consumeUntil } from '../../../functions/consumeUntil';
import { whileBinary } from '../../../checks/whileBinary';
import type { NumericToken } from '../../../interfaces/tokens/NumericToken';
import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';

export function transformBinary(
  characterStream: CharacterStream
): NumericToken {
  const prefix = `0${characterStream.next()}`;
  const consumedValue = consumeUntil(characterStream, whileBinary);
  return {
    type: 'NUMERIC',
    value: `${prefix}${consumedValue}`
  };
}
