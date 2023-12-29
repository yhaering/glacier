import type { BaseExpression } from './BaseExpression';
import type { SpreadElement } from './SpreadElement';
import type { Property } from './Property';

export interface ObjectExpression extends BaseExpression {
  type: 'ObjectExpression';
  properties: Array<Property | SpreadElement>;
}
