import type { BaseExpression } from './BaseExpression';
import type { Expression } from './Expression';
import type { Super } from './Super';
import type { SpreadElement } from './SpreadElement';

export interface BaseCallExpression extends BaseExpression {
  callee: Expression | Super;
  arguments: Array<Expression | SpreadElement>;
}
