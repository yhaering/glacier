import type { BaseExpression } from './BaseExpression';
import type { BaseFunction } from './BaseFunction';
import type { BlockStatement } from './BlockStatement';
import type { Expression } from './Expression';

export interface ArrowFunctionExpression extends BaseExpression, BaseFunction {
  type: 'ArrowFunctionExpression';
  expression: boolean;
  body: BlockStatement | Expression;
}
