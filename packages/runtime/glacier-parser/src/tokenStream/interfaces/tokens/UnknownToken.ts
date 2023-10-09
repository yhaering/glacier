import type { BaseToken } from './BaseToken';

export interface UnknownToken extends BaseToken {
  type: 'UNKNOWN';
}
