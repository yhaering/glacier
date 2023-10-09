import type { BaseToken } from './BaseToken';
import type { WhitespaceType } from './WhitespaceType';

export interface WhitespaceToken extends BaseToken {
  type: 'WHITESPACE';
  whitespaceType: WhitespaceType;
}
