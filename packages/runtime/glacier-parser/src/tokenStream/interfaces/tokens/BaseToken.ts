import type { TokenLocation } from './TokenLocation';

export interface BaseToken {
  loc: TokenLocation;
  value: string;
}
