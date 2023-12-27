import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { CommentToken } from '../../../interfaces/tokens/CommentToken';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileSingleLineComment } from '../../../checks/whileSingleLineComment';

export function transformSingleLineComment(
  characterStream: CharacterStream
): CommentToken {
  characterStream.next();
  characterStream.next();
  return {
    type: 'COMMENT',
    commentType: 'SINGLE_LINE',
    value: consumeUntil(characterStream, whileSingleLineComment)
  };
}
