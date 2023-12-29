import type { BaseStatement } from './BaseStatement';

import type { Expression } from './Expression';

export interface ThrowStatement extends BaseStatement {
  type: 'ThrowStatement';
  argument: Expression;
}
