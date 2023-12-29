import type { TokenStreamNextFn } from '../interfaces/TokenStreamNextFn';
import type { TokenStreamCache } from '../interfaces/TokenStreamCache';
import { transformCharacter } from '../transformer/transformCharacter';
import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';

export function createTokenStreamNextFn(
  characterStream: CharacterStream,
  cache: TokenStreamCache
): TokenStreamNextFn {
  return () => {
    if (cache.nextToken) {
      const nextToken = cache.nextToken;
      delete cache.nextToken;
      return nextToken;
    }
    const nextToken = transformCharacter(characterStream);
    if (!nextToken) {
      throw new Error('End of token stream reached');
    }
    return nextToken;
  };
}
