import type { BaseModuleSpecifier } from './BaseModuleSpecifier';
import type { Identifier } from './Identifier';

export interface ImportSpecifier extends BaseModuleSpecifier {
  type: 'ImportSpecifier';
  imported: Identifier;
}
