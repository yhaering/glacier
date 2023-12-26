import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { LineTerminatorToken } from '../../../interfaces/tokens/LineTerminatorToken';

export function transformLineTerminator(
  characterStream: CharacterStream
): LineTerminatorToken {
  return {
    type: 'LINE_TERMINATOR',
    value: characterStream.next()
  };
}
