import type { BaseExpression } from './BaseExpression';

import type { Identifier } from './Identifier';

export interface MetaProperty extends BaseExpression {
  type: 'MetaProperty';
  meta: Identifier;
  property: Identifier;
}
