import type { MaybeNamedFunctionDeclaration } from './MaybeNamedFunctionDeclaration';

import type { Identifier } from './Identifier';

export interface FunctionDeclaration extends MaybeNamedFunctionDeclaration {
  id: Identifier;
}
