import type { BaseNode } from './BaseNode';
import type { BaseExpression } from './BaseExpression';

export interface BigIntLiteral extends BaseNode, BaseExpression {
  type: 'Literal';
  value?: bigint | null | undefined;
  bigint: string;
  raw?: string | undefined;
}
