import type { BaseDeclaration } from './BaseDeclaration';

import type { VariableDeclarator } from './VariableDeclarator';

export interface VariableDeclaration extends BaseDeclaration {
  type: 'VariableDeclaration';
  declarations: VariableDeclarator[];
  kind: 'var' | 'let' | 'const';
}
