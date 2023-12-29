import type { BaseNode } from './BaseNode';
import type { BlockStatement } from './BlockStatement';
import type { Expression } from './Expression';
import type { Pattern } from './Pattern';

export interface BaseFunction extends BaseNode {
  params: Pattern[];
  generator?: boolean | undefined;
  async?: boolean | undefined;
  // The body is either BlockStatement or Expression because arrow functions
  // can have a body that's either. FunctionDeclarations and
  // FunctionExpressions have only BlockStatement bodies.
  body: BlockStatement | Expression;
}
