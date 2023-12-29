import type { BaseNode } from './BaseNode';
import type { Directive } from './Directive';
import type { Statement } from './Statement';
import type { ModuleDeclaration } from './ModuleDeclaration';

export interface Program extends BaseNode {
  type: 'Program';
  sourceType: 'script' | 'module';
  body: Array<Directive | Statement | ModuleDeclaration>;
}
