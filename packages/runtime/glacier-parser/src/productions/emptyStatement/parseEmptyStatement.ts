import type { ParserContext } from '../../interfaces/ParserContext';
import type { EmptyStatementNode } from './interfaces/EmptyStatementNode';

export function parseEmptyStatement(context: ParserContext): EmptyStatementNode | undefined {
  return;
}
