import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';

import type { Expression } from './Expression';

export interface IfStatement extends BaseStatement {
  type: 'IfStatement';
  test: Expression;
  consequent: Statement;
  alternate?: Statement | null | undefined;
}
