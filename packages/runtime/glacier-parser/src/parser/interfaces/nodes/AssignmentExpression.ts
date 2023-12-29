import type { BaseExpression } from './BaseExpression';
import type { AssignmentOperator } from './AssignmentOperator';
import type { Pattern } from './Pattern';
import type { MemberExpression } from './MemberExpression';
import type { Expression } from './Expression';

export interface AssignmentExpression extends BaseExpression {
  type: 'AssignmentExpression';
  operator: AssignmentOperator;
  left: Pattern | MemberExpression;
  right: Expression;
}
