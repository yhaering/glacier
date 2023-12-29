import type { BaseStatement } from './BaseStatement';

import type { Expression } from './Expression';

export interface ReturnStatement extends BaseStatement {
  type: 'ReturnStatement';
  argument?: Expression | null | undefined;
}
