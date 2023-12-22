import type { Segment } from '../interfaces/Segment';
import { createSegment } from '../factories/createSegment';
import { isWhitespace } from '../checks/isWhitespace';
import { isNewLine } from '../checks/isNewLine';
import { isNumber } from '../checks/isNumber';
import { isSymbol } from '../checks/isSymbol';

export function transformCharacter(char: string): Segment {
  if (isWhitespace(char)) {
    return createSegment('WHITESPACE', char);
  } else if (isNewLine(char)) {
    return createSegment('NEW_LINE', char);
  } else if (isNumber(char)) {
    return createSegment('NUMBER', char);
  } else if (isSymbol(char)) {
    return createSegment('SYMBOL', char);
  }
  return createSegment('LITERAL', char);
}
