import type { ImportDeclaration } from './ImportDeclaration';
import type { ExportNamedDeclaration } from './ExportNamedDeclaration';
import type { ExportDefaultDeclaration } from './ExportDefaultDeclaration';
import type { ExportAllDeclaration } from './ExportAllDeclaration';

export type ModuleDeclaration =
  | ImportDeclaration
  | ExportNamedDeclaration
  | ExportDefaultDeclaration
  | ExportAllDeclaration;
