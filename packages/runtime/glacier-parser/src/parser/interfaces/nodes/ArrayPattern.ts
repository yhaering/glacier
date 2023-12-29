import type { BasePattern } from './BasePattern';
import type { Pattern } from './Pattern';

export interface ArrayPattern extends BasePattern {
  type: 'ArrayPattern';
  elements: Array<Pattern | null>;
}
