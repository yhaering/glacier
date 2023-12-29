import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';

import type { Expression } from './Expression';

export interface WhileStatement extends BaseStatement {
  type: 'WhileStatement';
  test: Expression;
  body: Statement;
}
