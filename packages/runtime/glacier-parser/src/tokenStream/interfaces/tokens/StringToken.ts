import type { BaseToken } from './BaseToken';
import type { StringType } from './StringType';

export interface StringToken extends BaseToken {
  type: 'STRING';
  stringType: StringType;
}
