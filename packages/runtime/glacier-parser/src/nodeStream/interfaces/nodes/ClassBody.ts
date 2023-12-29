import type { BaseNode } from './BaseNode';
import type { MethodDefinition } from './MethodDefinition';
import type { StaticBlock } from './StaticBlock';

import type { PropertyDefinition } from './PropertyDefinition';

export interface ClassBody extends BaseNode {
  type: 'ClassBody';
  body: Array<MethodDefinition | PropertyDefinition | StaticBlock>;
}
