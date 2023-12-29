import type { Expression } from './Expression';
import type { BaseExpression } from './BaseExpression';

export interface AwaitExpression extends BaseExpression {
  type: 'AwaitExpression';
  argument: Expression;
}
