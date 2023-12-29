import type { BaseNode } from './BaseNode';
import type { BlockStatement } from './BlockStatement';

import type { Pattern } from './Pattern';

export interface CatchClause extends BaseNode {
  type: 'CatchClause';
  param: Pattern | null;
  body: BlockStatement;
}
