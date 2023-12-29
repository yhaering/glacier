import type { ParserOptions } from './ParserOptions';
import type { PositionContext } from './PositionContext';
import type { TokenizerContext } from './TokenizerContext';

export interface ParserContext {
  options: Readonly<ParserOptions>;
  tokenizer: TokenizerContext;
  position: PositionContext;
}
