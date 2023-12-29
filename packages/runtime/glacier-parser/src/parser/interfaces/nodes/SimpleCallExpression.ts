import type { BaseCallExpression } from './BaseCallExpression';

export interface SimpleCallExpression extends BaseCallExpression {
  type: 'CallExpression';
  optional: boolean;
}
