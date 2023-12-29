import type { BaseModuleDeclaration } from './BaseModuleDeclaration';
import type { Identifier } from './Identifier';
import type { Literal } from './Literal';

export interface ExportAllDeclaration extends BaseModuleDeclaration {
  type: 'ExportAllDeclaration';
  exported: Identifier | null;
  source: Literal;
}
