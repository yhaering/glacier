import type { BaseStatement } from './BaseStatement';
import type { BlockStatement } from './BlockStatement';

import type { CatchClause } from './CatchClause';

export interface TryStatement extends BaseStatement {
  type: 'TryStatement';
  block: BlockStatement;
  handler?: CatchClause | null | undefined;
  finalizer?: BlockStatement | null | undefined;
}
