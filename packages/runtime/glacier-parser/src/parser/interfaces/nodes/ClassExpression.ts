import type { BaseExpression } from './BaseExpression';
import type { BaseClass } from './BaseClass';
import type { Identifier } from './Identifier';

export interface ClassExpression extends BaseClass, BaseExpression {
  type: 'ClassExpression';
  id?: Identifier | null | undefined;
}
