import type { BaseToken } from './BaseToken';

export interface LineTerminatorToken extends BaseToken {
  type: 'LINE_TERMINATOR';
}
