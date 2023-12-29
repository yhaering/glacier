import type { BaseNode } from './BaseNode';

import type { Identifier } from './Identifier';

export interface BaseModuleSpecifier extends BaseNode {
  local: Identifier;
}
