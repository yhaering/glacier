import type { TokenStreamNextFn } from './TokenStreamNextFn';
import type { TokenStreamPeekFn } from './TokenStreamPeekFn';

export interface TokenStream {
  next: TokenStreamNextFn;
  peek: TokenStreamPeekFn;
}
