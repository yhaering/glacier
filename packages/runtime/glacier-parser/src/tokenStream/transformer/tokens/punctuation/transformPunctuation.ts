import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { PunctuationToken } from '../../../interfaces/tokens/PunctuationToken';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whilePunctuation } from '../../../checks/whilePunctuation';

export function transformPunctuation(
  characterStream: CharacterStream
): PunctuationToken {
  const value = consumeUntil(characterStream, whilePunctuation);
  return {
    type: 'PUNCTUATION',
    value
  };
}
