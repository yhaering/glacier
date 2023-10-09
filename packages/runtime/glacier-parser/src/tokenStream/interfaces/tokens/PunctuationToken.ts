import type { BaseToken } from './BaseToken';
import type { PunctuationType } from './PunctuationType';

export interface PunctuationToken extends BaseToken {
  type: 'PUNCTUATION';
  punctuationType: PunctuationType;
}
