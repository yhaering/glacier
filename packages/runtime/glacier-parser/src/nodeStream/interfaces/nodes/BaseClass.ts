import type { BaseNode } from './BaseNode';
import type { Expression } from './Expression';
import type { ClassBody } from './ClassBody';

export interface BaseClass extends BaseNode {
  superClass?: Expression | null | undefined;
  body: ClassBody;
}
