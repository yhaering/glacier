import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { UnknownToken } from '../../../interfaces/tokens/UnknownToken';

export function transformUnknown(
  characterStream: CharacterStream
): UnknownToken {
  return {
    type: 'UNKNOWN',
    value: characterStream.next()
  };
}
