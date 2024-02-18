import type { ParserContext } from './interfaces/ParserContext';
import { oneOf } from './functions/oneOf';
import type { BaseNode } from './interfaces/BaseNode';

export function parse(context: ParserContext) {
  return oneOf<BaseNode>(context, [])
}
