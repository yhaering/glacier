import type { TokenType } from '../interfaces/TokenType';
import type { CodePoint } from '../interfaces/CodePoint';
import { WHITESPACES } from '../constants/WHITESPACES';
import { LINE_TERMINATORS } from '../constants/LINE_TERMINATORS';
import { DIGITS } from '../constants/DIGITS';
import { SYMBOLS } from '../constants/SYMBOLS';

export function getTokenType(codePoint: CodePoint): TokenType {
  if (WHITESPACES.has(codePoint)) {
    return 'WHITESPACE';
  } else if (LINE_TERMINATORS.has(codePoint)) {
    return 'LINE_TERMINATOR';
  } else if (DIGITS.has(codePoint)) {
    return 'NUMBER';
  } else if (SYMBOLS.has(codePoint)) {
    return 'SYMBOL';
  } else {
    return 'TEXT';
  }
}
