import type { BaseModuleSpecifier } from './BaseModuleSpecifier';

export interface ImportNamespaceSpecifier extends BaseModuleSpecifier {
  type: 'ImportNamespaceSpecifier';
}
