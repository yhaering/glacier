import type { ParserContext } from '../../interface/ParserContext';
import type { NumberNode } from './interfaces/NumberNode';
import { oneOf } from '../../functions/oneOf';
import { parseBinary } from './parser/parseBinary';
import { parseOctal } from './parser/parseOctal';
import { parseHex } from './parser/parseHex';
import { parseDecimal } from './parser/parseDecimal';

export function parseNumber(context: ParserContext): NumberNode | undefined {
  return oneOf(context, [
    parseBinary,
    parseOctal,
    parseHex,
    parseDecimal
  ])
}


