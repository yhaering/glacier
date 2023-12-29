import type { RestElement } from './RestElement';
import type { AssignmentProperty } from './AssignmentProperty';
import type { BasePattern } from './BasePattern';

export interface ObjectPattern extends BasePattern {
  type: 'ObjectPattern';
  properties: Array<AssignmentProperty | RestElement>;
}
