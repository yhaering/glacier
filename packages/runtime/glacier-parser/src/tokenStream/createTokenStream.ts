import type { TokenStream } from './interfaces/TokenStream';
import { createTokenStreamNextFn } from './factories/createTokenStreamNextFn';
import { createTokenStreamPeekFn } from './factories/createTokenStreamPeekFn';
import type { TokenStreamCache } from './interfaces/TokenStreamCache';
import type { CharacterStream } from '../characterStream/interfaces/CharacterStream';

export function createTokenStream(
  characterStream: CharacterStream
): TokenStream {
  const cache: TokenStreamCache = {};
  return {
    next: createTokenStreamNextFn(characterStream, cache),
    peek: createTokenStreamPeekFn(characterStream, cache)
  };
}
