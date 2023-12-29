import type { EmptyStatement } from './EmptyStatement';
import type { BlockStatement } from './BlockStatement';
import type { StaticBlock } from './StaticBlock';
import type { ExpressionStatement } from './ExpressionStatement';
import type { IfStatement } from './IfStatement';
import type { LabeledStatement } from './LabeledStatement';
import type { BreakStatement } from './BreakStatement';
import type { ContinueStatement } from './ContinueStatement';
import type { WithStatement } from './WithStatement';
import type { SwitchStatement } from './SwitchStatement';
import type { ReturnStatement } from './ReturnStatement';
import type { ThrowStatement } from './ThrowStatement';
import type { TryStatement } from './TryStatement';
import type { WhileStatement } from './WhileStatement';
import type { DoWhileStatement } from './DoWhileStatement';
import type { ForStatement } from './ForStatement';
import type { ForInStatement } from './ForInStatement';
import type { DebuggerStatement } from './DebuggerStatement';
import type { Declaration } from './Declaration';
import type { ForOfStatement } from './ForOfStatement';

export type Statement =
  | ExpressionStatement
  | BlockStatement
  | StaticBlock
  | EmptyStatement
  | DebuggerStatement
  | WithStatement
  | ReturnStatement
  | LabeledStatement
  | BreakStatement
  | ContinueStatement
  | IfStatement
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | WhileStatement
  | DoWhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | Declaration;
