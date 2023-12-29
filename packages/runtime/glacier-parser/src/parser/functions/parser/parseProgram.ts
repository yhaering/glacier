import type { ParserContext } from '../../interfaces/ParserContext';
import type { Program } from '../../interfaces/nodes/Program';
import { parseProgramBody } from './parseProgramBody';

export function parseProgram(context: ParserContext): Program {
  const { position } = context;
  return position.decorate(() => {
    return {
      type: 'Program',
      body: parseProgramBody(context)
    };
  });
}
