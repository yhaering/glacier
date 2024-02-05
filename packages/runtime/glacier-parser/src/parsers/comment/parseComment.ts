import type { CommentNode } from './interfaces/CommentNode';
import type { ParserContext } from '../../interface/ParserContext';
import { oneOf } from '../../functions/oneOf';
import { parseSingleLineComment } from './parsers/parseSingleLineComment';
import { parseMultiLineComment } from './parsers/parseMultiLineComment';
import { parseHashbangComment } from './parsers/parseHashbangComment';

export function parseComment(context: ParserContext): CommentNode | undefined {
  return oneOf(context, [parseSingleLineComment, parseMultiLineComment, parseHashbangComment]);
}
