import type { BaseExpression } from './BaseExpression';
import type { Expression } from './Expression';

import type { SpreadElement } from './SpreadElement';

export interface ArrayExpression extends BaseExpression {
  type: 'ArrayExpression';
  elements: Array<Expression | SpreadElement | null>;
}
