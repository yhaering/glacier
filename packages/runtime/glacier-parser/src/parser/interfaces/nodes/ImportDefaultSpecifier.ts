import type { BaseModuleSpecifier } from './BaseModuleSpecifier';

export interface ImportDefaultSpecifier extends BaseModuleSpecifier {
  type: 'ImportDefaultSpecifier';
}
