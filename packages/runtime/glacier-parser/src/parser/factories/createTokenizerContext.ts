import type { TokenStream } from '../../tokenStream/interfaces/TokenStream';
import type { PositionContext } from '../interfaces/PositionContext';
import type { TokenizerContext } from '../interfaces/TokenizerContext';
import { createNextTokenFn } from './createNextTokenFn';
import { createPeekTokenFn } from './createPeekTokenFn';

export function createTokenizerContext(
  tokenizer: TokenStream,
  position: PositionContext
): TokenizerContext {
  return {
    peek: createPeekTokenFn(tokenizer),
    next: createNextTokenFn(tokenizer, position)
  };
}
