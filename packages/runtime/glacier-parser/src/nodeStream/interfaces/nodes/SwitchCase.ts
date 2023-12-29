import type { BaseNode } from './BaseNode';
import type { Expression } from './Expression';
import type { Statement } from './Statement';

export interface SwitchCase extends BaseNode {
  type: 'SwitchCase';
  test?: Expression | null | undefined;
  consequent: Statement[];
}
