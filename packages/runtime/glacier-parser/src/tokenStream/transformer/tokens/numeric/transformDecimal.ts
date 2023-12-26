import type { NumericToken } from '../../../interfaces/tokens/NumericToken';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileDecimal } from '../../../checks/whileDecimal';
import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';

export function transformDecimal(
  characterStream: CharacterStream,
  prefix: string
): NumericToken {
  return {
    type: 'NUMERIC',
    value: consumeUntil(characterStream, whileDecimal, prefix)
  };
}
