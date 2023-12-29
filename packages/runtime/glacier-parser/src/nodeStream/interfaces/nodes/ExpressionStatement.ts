import type { BaseStatement } from './BaseStatement';

import type { Expression } from './Expression';

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement';
  expression: Expression;
}
