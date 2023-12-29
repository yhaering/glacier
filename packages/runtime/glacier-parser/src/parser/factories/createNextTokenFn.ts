import type { TokenStreamNextFn } from '../../tokenStream/interfaces/TokenStreamNextFn';
import type { TokenStream } from '../../tokenStream/interfaces/TokenStream';
import type { PositionContext } from '../interfaces/PositionContext';

export function createNextTokenFn(
  tokenStream: TokenStream,
  position: PositionContext
): TokenStreamNextFn {
  return () => {
    const token = tokenStream.next();
    position.consume(token);
    return token;
  };
}
