import type { BaseToken } from './BaseToken';

export interface IdentifierToken extends BaseToken {
  type: 'IDENTIFIER';
}
