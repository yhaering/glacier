import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { WhitespaceToken } from '../../../interfaces/tokens/WhitespaceToken';

export function transformWhitespace(
  characterStream: CharacterStream
): WhitespaceToken {
  return {
    type: 'WHITESPACE',
    value: characterStream.next()
  };
}
