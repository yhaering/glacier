import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';

import type { Expression } from './Expression';

export interface DoWhileStatement extends BaseStatement {
  type: 'DoWhileStatement';
  body: Statement;
  test: Expression;
}
