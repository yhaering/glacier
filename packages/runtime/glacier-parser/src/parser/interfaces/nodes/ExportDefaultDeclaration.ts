import type { MaybeNamedFunctionDeclaration } from './MaybeNamedFunctionDeclaration';
import type { Expression } from './Expression';
import type { BaseModuleDeclaration } from './BaseModuleDeclaration';
import type { MaybeNamedClassDeclaration } from './MaybeNamedClassDeclaration';

export interface ExportDefaultDeclaration extends BaseModuleDeclaration {
  type: 'ExportDefaultDeclaration';
  declaration:
    | MaybeNamedFunctionDeclaration
    | MaybeNamedClassDeclaration
    | Expression;
}
