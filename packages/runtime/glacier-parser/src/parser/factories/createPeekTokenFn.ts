import type { TokenStream } from '../../tokenStream/interfaces/TokenStream';
import type { TokenStreamPeekFn } from '../../tokenStream/interfaces/TokenStreamPeekFn';

export function createPeekTokenFn(tokenStream: TokenStream): TokenStreamPeekFn {
  return () => {
    return tokenStream.peek();
  };
}
