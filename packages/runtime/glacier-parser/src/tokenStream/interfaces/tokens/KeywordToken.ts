import type { BaseToken } from './BaseToken';

export interface KeywordToken extends BaseToken {
  type: 'KEYWORD';
}
