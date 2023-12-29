import type { BaseStatement } from './BaseStatement';

import type { Identifier } from './Identifier';

export interface BreakStatement extends BaseStatement {
  type: 'BreakStatement';
  label?: Identifier | null | undefined;
}
