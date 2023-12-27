import { isLineTerminator } from './isLineTerminator';

export function whileSingleLineComment(char: string): boolean {
  return !isLineTerminator(char);
}
