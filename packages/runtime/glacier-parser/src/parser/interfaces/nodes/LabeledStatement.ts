import type { BaseStatement } from './BaseStatement';
import type { Statement } from './Statement';

import type { Identifier } from './Identifier';

export interface LabeledStatement extends BaseStatement {
  type: 'LabeledStatement';
  label: Identifier;
  body: Statement;
}
