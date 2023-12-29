import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';

import type { Expression } from './Expression';

export interface WithStatement extends BaseStatement {
  type: 'WithStatement';
  object: Expression;
  body: Statement;
}
