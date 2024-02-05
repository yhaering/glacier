import type { ParserContext } from './interface/ParserContext';
import { oneOf } from './functions/oneOf';
import { parseComment } from './parsers/comment/parseComment';
import { parseIdentifier } from './parsers/identifier/parseIdentifier';
import { parseNumber } from './parsers/number/parseNumber';
import type { BaseNode } from './interface/BaseNode';
import { parseString } from './parsers/string/parseString';

export function parse(context: ParserContext) {
  return oneOf<BaseNode>(context, [
    parseComment,
    parseIdentifier,
    parseNumber,
    parseString
  ])
}
