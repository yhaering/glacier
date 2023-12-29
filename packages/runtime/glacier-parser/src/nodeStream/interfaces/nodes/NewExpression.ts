import type { BaseCallExpression } from './BaseCallExpression';

export interface NewExpression extends BaseCallExpression {
  type: 'NewExpression';
}
