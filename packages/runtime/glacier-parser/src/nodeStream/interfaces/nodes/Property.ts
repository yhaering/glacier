import type { BaseNode } from './BaseNode';
import type { Expression } from './Expression';

import type { PrivateIdentifier } from './PrivateIdentifier';
import type { Pattern } from './Pattern';

export interface Property extends BaseNode {
  type: 'Property';
  key: Expression | PrivateIdentifier;
  value: Expression | Pattern; // Could be an AssignmentProperty
  kind: 'init' | 'get' | 'set';
  method: boolean;
  shorthand: boolean;
  computed: boolean;
}
