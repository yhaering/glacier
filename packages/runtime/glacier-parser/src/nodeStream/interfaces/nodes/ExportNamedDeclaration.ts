import type { ExportSpecifier } from './ExportSpecifier';
import type { Declaration } from './Declaration';
import type { BaseModuleDeclaration } from './BaseModuleDeclaration';
import type { Literal } from './Literal';

export interface ExportNamedDeclaration extends BaseModuleDeclaration {
  type: 'ExportNamedDeclaration';
  declaration?: Declaration | null | undefined;
  specifiers: ExportSpecifier[];
  source?: Literal | null | undefined;
}
