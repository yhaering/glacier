import type { CommentType } from './CommentType';
import type { BaseToken } from './BaseToken';

export interface CommentToken extends BaseToken {
  type: 'COMMENT';
  commentType: CommentType;
}
