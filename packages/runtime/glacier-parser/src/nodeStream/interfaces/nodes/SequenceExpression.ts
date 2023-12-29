import type { BaseExpression } from './BaseExpression';
import type { Expression } from './Expression';

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression';
  expressions: Expression[];
}
