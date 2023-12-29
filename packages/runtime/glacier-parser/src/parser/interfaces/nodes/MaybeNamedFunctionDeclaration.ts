import type { BaseFunction } from './BaseFunction';
import type { BaseDeclaration } from './BaseDeclaration';
import type { BlockStatement } from './BlockStatement';

import type { Identifier } from './Identifier';

export interface MaybeNamedFunctionDeclaration
  extends BaseFunction,
    BaseDeclaration {
  type: 'FunctionDeclaration';
  /** It is null when a function declaration is a part of the `export default function` statement */
  id: Identifier | null;
  body: BlockStatement;
}
