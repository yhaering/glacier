import type { ParserContext } from '../../interfaces/ParserContext';
import type { Program } from '../../interfaces/nodes/Program';
import { tryParser } from '../tryParser';
import { parseDirective } from './parseDirective';
import { parseStatement } from './parseStatement';
import { parseModuleDeclaration } from './parseModuleDeclaration';
import { tryUntil } from '../tryUntil';
import { isNotEOF } from '../../checks/isNotEOF';

export function parseProgramBody(context: ParserContext): Program['body'] {
  return tryUntil(context, isNotEOF, () => {
    return tryParser(context, [
      parseDirective,
      parseStatement,
      parseModuleDeclaration
    ]);
  });
}
