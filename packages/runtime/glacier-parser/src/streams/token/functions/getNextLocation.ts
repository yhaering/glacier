import type { TokenType } from '../interfaces/TokenType';
import type { TokenLocation } from '../interfaces/TokenLocation';

export function getNextLocation(
  type: TokenType,
  loc: TokenLocation
): TokenLocation {
  if (type === 'LINE_TERMINATOR') {
    return {
      line: loc.line + 1,
      col: 0,
      index: loc.index + 1
    };
  }
  return {
    line: loc.line,
    col: loc.col + 1,
    index: loc.index + 1
  };
}
