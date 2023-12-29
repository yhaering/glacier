import type { Pattern } from './Pattern';
import type { Property } from './Property';

export interface AssignmentProperty extends Property {
  value: Pattern;
  kind: 'init';
  method: boolean; // false
}
