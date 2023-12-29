import type { BaseNode } from './BaseNode';

import type { Literal } from './Literal';

export interface Directive extends BaseNode {
  type: 'ExpressionStatement';
  expression: Literal;
  directive: string;
}
