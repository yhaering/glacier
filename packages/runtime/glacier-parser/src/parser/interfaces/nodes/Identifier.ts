import type { BaseNode } from './BaseNode';
import type { BaseExpression } from './BaseExpression';

import type { BasePattern } from './BasePattern';

export interface Identifier extends BaseNode, BaseExpression, BasePattern {
  type: 'Identifier';
  name: string;
}
