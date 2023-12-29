import type { MaybeNamedClassDeclaration } from './MaybeNamedClassDeclaration';
import type { Identifier } from './Identifier';

export interface ClassDeclaration extends MaybeNamedClassDeclaration {
  id: Identifier;
}
