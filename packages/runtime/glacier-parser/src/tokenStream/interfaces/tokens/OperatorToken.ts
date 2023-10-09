import type { BaseToken } from './BaseToken';
import type { OperatorType } from './OperatorType';

export interface OperatorToken extends BaseToken {
  type: 'OPERATOR';
  operatorType: OperatorType;
}
