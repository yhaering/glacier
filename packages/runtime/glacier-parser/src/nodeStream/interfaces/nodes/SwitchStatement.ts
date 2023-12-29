import type { BaseStatement } from './BaseStatement';
import type { Expression } from './Expression';
import type { SwitchCase } from './SwitchCase';

export interface SwitchStatement extends BaseStatement {
  type: 'SwitchStatement';
  discriminant: Expression;
  cases: SwitchCase[];
}
