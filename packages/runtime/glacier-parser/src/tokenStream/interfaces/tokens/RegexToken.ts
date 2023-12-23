import type { BaseToken } from './BaseToken';

export interface RegexToken extends BaseToken {
  type: 'REGEX';
}
