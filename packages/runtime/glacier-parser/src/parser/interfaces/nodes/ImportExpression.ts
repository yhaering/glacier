import type { BaseExpression } from './BaseExpression';
import type { Expression } from './Expression';

export interface ImportExpression extends BaseExpression {
  type: 'ImportExpression';
  source: Expression;
}
