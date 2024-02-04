import type { TokenType } from './TokenType';
import type { TokenProperties } from './TokenProperties';

export interface PartialToken {
  type: TokenType;
  props: TokenProperties[];
}
