import type { BaseToken } from './BaseToken';
import type { CommentType } from './CommentType';

export interface CommentToken extends BaseToken {
  type: 'COMMENT';
  commentType: CommentType;
}
