import type { Segment } from '../interfaces/Segment';
import { WHITESPACES } from '../constants/WHITESPACES';
import { NEW_LINES } from '../constants/NEW_LINES';
import { SYMBOLS } from '../constants/SYMBOLS';
import { NUMBERS } from '../constants/NUMBERS';
import { createSegment } from '../factories/createSegment';

export function transformCharacter(char: string): Segment {
  if (WHITESPACES.has(char)) {
    return createSegment('WHITESPACE', char);
  } else if (NEW_LINES.has(char)) {
    return createSegment('NEW_LINE', char);
  } else if (NUMBERS.has(char)) {
    return createSegment('NUMBER', char);
  } else if (SYMBOLS.has(char)) {
    return createSegment('SYMBOL', char);
  }
  return createSegment('LITERAL', char);
}
