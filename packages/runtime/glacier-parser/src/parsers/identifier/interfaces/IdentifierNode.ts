import type { ValueNode } from '../../../interface/ValueNode';

export interface IdentifierNode extends ValueNode {
  type: 'identifier';
  isPrivate: boolean;
}
