import type { BaseModuleSpecifier } from './BaseModuleSpecifier';
import type { Identifier } from './Identifier';

export interface ExportSpecifier extends BaseModuleSpecifier {
  type: 'ExportSpecifier';
  exported: Identifier;
}
