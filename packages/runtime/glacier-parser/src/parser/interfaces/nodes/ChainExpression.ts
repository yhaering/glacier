import type { BaseExpression } from './BaseExpression';
import type { ChainElement } from './ChainElement';

export interface ChainExpression extends BaseExpression {
  type: 'ChainExpression';
  expression: ChainElement;
}
