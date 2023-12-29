import type { ImportSpecifier } from './ImportSpecifier';
import type { ImportDefaultSpecifier } from './ImportDefaultSpecifier';
import type { ImportNamespaceSpecifier } from './ImportNamespaceSpecifier';
import type { ExportSpecifier } from './ExportSpecifier';

export type ModuleSpecifier =
  | ImportSpecifier
  | ImportDefaultSpecifier
  | ImportNamespaceSpecifier
  | ExportSpecifier;
