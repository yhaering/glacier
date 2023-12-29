import type { BaseNode } from './BaseNode';
import type { Expression } from './Expression';
import type { Pattern } from './Pattern';

export interface VariableDeclarator extends BaseNode {
  type: 'VariableDeclarator';
  id: Pattern;
  init?: Expression | null | undefined;
}
