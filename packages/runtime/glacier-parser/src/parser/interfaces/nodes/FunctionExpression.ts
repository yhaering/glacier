import type { BaseFunction } from './BaseFunction';
import type { BaseExpression } from './BaseExpression';
import type { Identifier } from './Identifier';
import type { BlockStatement } from './BlockStatement';

export interface FunctionExpression extends BaseFunction, BaseExpression {
  id?: Identifier | null | undefined;
  type: 'FunctionExpression';
  body: BlockStatement;
}
