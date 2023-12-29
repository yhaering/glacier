import type { BaseExpression } from './BaseExpression';
import type { Expression } from './Expression';

export interface ConditionalExpression extends BaseExpression {
  type: 'ConditionalExpression';
  test: Expression;
  alternate: Expression;
  consequent: Expression;
}
