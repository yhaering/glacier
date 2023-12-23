import type { BaseToken } from './BaseToken';

export interface NullToken extends BaseToken {
  type: 'NULL';
}
