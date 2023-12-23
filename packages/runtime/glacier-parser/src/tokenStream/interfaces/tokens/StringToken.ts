import type { StringType } from './StringType';
import type { BaseToken } from './BaseToken';

export interface StringToken extends BaseToken {
  type: 'STRING';
  stringType: StringType;
}
