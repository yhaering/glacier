import type { BaseNode } from './BaseNode';
import type { Expression } from './Expression';
import type { FunctionExpression } from './FunctionExpression';
import type { PrivateIdentifier } from './PrivateIdentifier';

export interface MethodDefinition extends BaseNode {
  type: 'MethodDefinition';
  key: Expression | PrivateIdentifier;
  value: FunctionExpression;
  kind: 'constructor' | 'method' | 'get' | 'set';
  computed: boolean;
  static: boolean;
}
