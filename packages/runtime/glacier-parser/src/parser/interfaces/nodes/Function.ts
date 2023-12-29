import type { FunctionDeclaration } from './FunctionDeclaration';
import type { ArrowFunctionExpression } from './ArrowFunctionExpression';
import type { FunctionExpression } from './FunctionExpression';

export type Function =
  | FunctionDeclaration
  | FunctionExpression
  | ArrowFunctionExpression;
