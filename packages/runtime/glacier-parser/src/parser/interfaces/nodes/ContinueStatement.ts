import type { BaseStatement } from './BaseStatement';

import type { Identifier } from './Identifier';

export interface ContinueStatement extends BaseStatement {
  type: 'ContinueStatement';
  label?: Identifier | null | undefined;
}
