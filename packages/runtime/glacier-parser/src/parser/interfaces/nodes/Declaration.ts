import type { FunctionDeclaration } from './FunctionDeclaration';
import type { VariableDeclaration } from './VariableDeclaration';
import type { ClassDeclaration } from './ClassDeclaration';

export type Declaration =
  | FunctionDeclaration
  | VariableDeclaration
  | ClassDeclaration;
