import type { BasePattern } from './BasePattern';
import type { Pattern } from './Pattern';

export interface RestElement extends BasePattern {
  type: 'RestElement';
  argument: Pattern;
}
