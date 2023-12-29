import type { BaseExpression } from './BaseExpression';
import type { BinaryOperator } from './BinaryOperator';
import type { Expression } from './Expression';

export interface BinaryExpression extends BaseExpression {
  type: 'BinaryExpression';
  operator: BinaryOperator;
  left: Expression;
  right: Expression;
}
