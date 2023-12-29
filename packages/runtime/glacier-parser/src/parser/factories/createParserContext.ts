import type { ParserOptions } from '../interfaces/ParserOptions';
import type { ParserContext } from '../interfaces/ParserContext';
import type { TokenStream } from '../../tokenStream/interfaces/TokenStream';
import { createPositionContext } from './createPositionContext';
import { createTokenizerContext } from './createTokenizerContext';

export function createParserContext(
  tokenizer: TokenStream,
  options: ParserOptions
): ParserContext {
  const positionContext = createPositionContext();
  const tokenContext = createTokenizerContext(tokenizer, positionContext);
  return {
    options,
    tokenizer: tokenContext,
    position: positionContext
  };
}
