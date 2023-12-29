import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';
import type { Comment } from './Comment';

export interface BlockStatement extends BaseStatement {
  type: 'BlockStatement';
  body: Statement[];
  innerComments?: Comment[] | undefined;
}
