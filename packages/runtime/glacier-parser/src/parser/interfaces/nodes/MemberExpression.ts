import type { BaseExpression } from './BaseExpression';
import type { BasePattern } from './BasePattern';
import type { Expression } from './Expression';
import type { Super } from './Super';

import type { PrivateIdentifier } from './PrivateIdentifier';

export interface MemberExpression extends BaseExpression, BasePattern {
  type: 'MemberExpression';
  object: Expression | Super;
  property: Expression | PrivateIdentifier;
  computed: boolean;
  optional: boolean;
}
