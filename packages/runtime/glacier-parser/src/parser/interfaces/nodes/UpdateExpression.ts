import type { BaseExpression } from './BaseExpression';
import type { UpdateOperator } from './UpdateOperator';
import type { Expression } from './Expression';

export interface UpdateExpression extends BaseExpression {
  type: 'UpdateExpression';
  operator: UpdateOperator;
  argument: Expression;
  prefix: boolean;
}
