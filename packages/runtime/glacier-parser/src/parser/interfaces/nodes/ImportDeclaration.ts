import type { ImportSpecifier } from './ImportSpecifier';
import type { ImportDefaultSpecifier } from './ImportDefaultSpecifier';
import type { ImportNamespaceSpecifier } from './ImportNamespaceSpecifier';
import type { BaseModuleDeclaration } from './BaseModuleDeclaration';
import type { Literal } from './Literal';

export interface ImportDeclaration extends BaseModuleDeclaration {
  type: 'ImportDeclaration';
  specifiers: Array<
    ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier
  >;
  source: Literal;
}
