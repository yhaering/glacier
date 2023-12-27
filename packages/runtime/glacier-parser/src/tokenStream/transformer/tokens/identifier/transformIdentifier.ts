import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { IdentifierToken } from '../../../interfaces/tokens/IdentifierToken';
import type { KeywordToken } from '../../../interfaces/tokens/KeywordToken';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileIdentifier } from '../../../checks/whileIdentifier';
import { KEYWORDS } from '../../../constants/keywords';
import type { BooleanToken } from '../../../interfaces/tokens/BooleanToken';
import type { NullToken } from '../../../interfaces/tokens/NullToken';

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

  if (KEYWORDS.includes(identifier)) {
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
