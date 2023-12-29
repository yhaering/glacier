import type { BaseNode } from './BaseNode';
import type { Expression } from './Expression';

import type { PrivateIdentifier } from './PrivateIdentifier';

export interface PropertyDefinition extends BaseNode {
  type: 'PropertyDefinition';
  key: Expression | PrivateIdentifier;
  value?: Expression | null | undefined;
  computed: boolean;
  static: boolean;
}
