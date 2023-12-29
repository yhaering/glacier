import type { Expression } from './Expression';
import type { BasePattern } from './BasePattern';
import type { Pattern } from './Pattern';

export interface AssignmentPattern extends BasePattern {
  type: 'AssignmentPattern';
  left: Pattern;
  right: Expression;
}
