import type { TokenStreamPeekFn } from '../interfaces/TokenStreamPeekFn';
import type { TokenStreamCache } from '../interfaces/TokenStreamCache';
import { transformCharacter } from '../transformer/transformCharacter';
import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';

export function createTokenStreamPeekFn(
  characterStream: CharacterStream,
  cache: TokenStreamCache
): TokenStreamPeekFn {
  return () => {
    if (cache.nextToken) {
      return cache.nextToken;
    }

    if (!characterStream.peek()) {
      return;
    }

    cache.nextToken = transformCharacter(characterStream);
    return cache.nextToken;
  };
}
