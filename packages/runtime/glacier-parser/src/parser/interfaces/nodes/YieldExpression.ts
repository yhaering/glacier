import type { BaseExpression } from './BaseExpression';
import type { Expression } from './Expression';

export interface YieldExpression extends BaseExpression {
  type: 'YieldExpression';
  argument?: Expression | null | undefined;
  delegate: boolean;
}
