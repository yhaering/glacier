import type { BaseExpression } from './BaseExpression';
import type { UnaryOperator } from './UnaryOperator';
import type { Expression } from './Expression';

export interface UnaryExpression extends BaseExpression {
  type: 'UnaryExpression';
  operator: UnaryOperator;
  prefix: true;
  argument: Expression;
}
