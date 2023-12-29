import type { BaseDeclaration } from './BaseDeclaration';
import type { BaseClass } from './BaseClass';
import type { Identifier } from './Identifier';

export interface MaybeNamedClassDeclaration extends BaseClass, BaseDeclaration {
  type: 'ClassDeclaration';
  /** It is null when a class declaration is a part of the `export default class` statement */
  id: Identifier | null;
}
