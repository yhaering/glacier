import type { TokenType } from './TokenType';
import type { TokenLocation } from './TokenLocation';
import type { TokenProperties } from './TokenProperties';

export interface Token {
  type: TokenType;
  props: TokenProperties[];
  value: string;
  loc: TokenLocation;
}
