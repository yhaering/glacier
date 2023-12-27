import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { CommentToken } from '../../../interfaces/tokens/CommentToken';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileMultiLineComment } from '../../../checks/whileMultiLineComment';

export function transformMultiLineComment(
  characterStream: CharacterStream
): CommentToken {
  characterStream.next();
  characterStream.next();
  return {
    type: 'COMMENT',
    commentType: 'MULTI_LINE',
    value: consumeUntil(characterStream, whileMultiLineComment).slice(0, -2)
  };
}
