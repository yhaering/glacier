import type { BaseForXStatement } from './BaseForXStatement';

export interface ForOfStatement extends BaseForXStatement {
  type: 'ForOfStatement';
  await: boolean;
}
