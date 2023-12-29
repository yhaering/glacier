import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';
import type { VariableDeclaration } from './VariableDeclaration';
import type { Expression } from './Expression';
import type { Pattern } from './Pattern';

export interface BaseForXStatement extends BaseStatement {
  left: VariableDeclaration | Pattern;
  right: Expression;
  body: Statement;
}
