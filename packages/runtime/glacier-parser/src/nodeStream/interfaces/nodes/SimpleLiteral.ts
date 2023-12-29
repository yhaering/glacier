import type { BaseNode } from './BaseNode';
import type { BaseExpression } from './BaseExpression';

export interface SimpleLiteral extends BaseNode, BaseExpression {
  type: 'Literal';
  value: string | boolean | number | null;
  raw?: string | undefined;
}
