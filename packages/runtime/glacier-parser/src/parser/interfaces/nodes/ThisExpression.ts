import type { BaseExpression } from './BaseExpression';

export interface ThisExpression extends BaseExpression {
  type: 'ThisExpression';
}
