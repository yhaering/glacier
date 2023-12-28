import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { IdentifierToken } from '../../../interfaces/tokens/IdentifierToken';
import type { KeywordToken } from '../../../interfaces/tokens/KeywordToken';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileIdentifier } from '../../../checks/whileIdentifier';
import type { BooleanToken } from '../../../interfaces/tokens/BooleanToken';
import type { NullToken } from '../../../interfaces/tokens/NullToken';
/* eslint-disable max-lines */
export function transformIdentifier(
  characterStream: CharacterStream
): IdentifierToken | KeywordToken | BooleanToken | NullToken {
  const prefix = characterStream.next();
  const identifier = consumeUntil(characterStream, whileIdentifier, prefix);

  if (identifier === 'null') {
    return {
      type: 'NULL',
      value: identifier
    };
  }

  if (identifier === 'true' || identifier === 'false') {
    return {
      type: 'BOOLEAN',
      value: identifier
    };
  }

  if (
    identifier === 'await' ||
    identifier === 'break' ||
    identifier === 'case' ||
    identifier === 'catch' ||
    identifier === 'class' ||
    identifier === 'const' ||
    identifier === 'continue' ||
    identifier === 'debugger' ||
    identifier === 'default' ||
    identifier === 'delete' ||
    identifier === 'do' ||
    identifier === 'else' ||
    identifier === 'enum' ||
    identifier === 'export' ||
    identifier === 'extends' ||
    identifier === 'false' ||
    identifier === 'finally' ||
    identifier === 'for' ||
    identifier === 'function' ||
    identifier === 'if' ||
    identifier === 'import' ||
    identifier === 'in' ||
    identifier === 'instanceof' ||
    identifier === 'new' ||
    identifier === 'null' ||
    identifier === 'return' ||
    identifier === 'super' ||
    identifier === 'switch' ||
    identifier === 'this' ||
    identifier === 'throw' ||
    identifier === 'true' ||
    identifier === 'try' ||
    identifier === 'typeof' ||
    identifier === 'var' ||
    identifier === 'void' ||
    identifier === 'while' ||
    identifier === 'with' ||
    identifier === 'yield'
  ) {
    return {
      type: 'KEYWORD',
      value: identifier
    };
  }

  return {
    type: 'IDENTIFIER',
    value: identifier
  };
}
