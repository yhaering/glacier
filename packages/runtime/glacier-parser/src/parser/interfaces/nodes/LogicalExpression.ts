import type { BaseExpression } from './BaseExpression';
import type { LogicalOperator } from './LogicalOperator';
import type { Expression } from './Expression';

export interface LogicalExpression extends BaseExpression {
  type: 'LogicalExpression';
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
}
