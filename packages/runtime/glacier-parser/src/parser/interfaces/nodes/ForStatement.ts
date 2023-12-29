import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';
import type { VariableDeclaration } from './VariableDeclaration';
import type { Expression } from './Expression';

export interface ForStatement extends BaseStatement {
  type: 'ForStatement';
  init?: VariableDeclaration | Expression | null | undefined;
  test?: Expression | null | undefined;
  update?: Expression | null | undefined;
  body: Statement;
}
