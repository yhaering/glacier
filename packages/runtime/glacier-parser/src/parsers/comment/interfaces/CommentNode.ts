import type { CommentType } from './CommentType';
import type { ValueNode } from '../../../interface/ValueNode';

export interface CommentNode extends ValueNode {
  type: 'comment',
  commentType: CommentType;
}
