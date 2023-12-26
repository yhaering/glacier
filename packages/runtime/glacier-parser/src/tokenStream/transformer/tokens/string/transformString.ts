import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { StringToken } from '../../../interfaces/tokens/StringToken';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileString } from '../../../checks/whileString';
import { whileTemplateString } from '../../../checks/whileTemplateString';

export function transformString(characterString: CharacterStream): StringToken {
  const startSymbol = characterString.next();
  if (startSymbol === '`') {
    const value = consumeUntil(characterString, whileTemplateString);
    characterString.next();
    return {
      type: 'STRING',
      stringType: 'TEMPLATE',
      value
    };
  }
  const value = consumeUntil(characterString, whileString(startSymbol));
  characterString.next();
  return {
    type: 'STRING',
    stringType: startSymbol === '"' ? 'DOUBLE' : 'SINGLE',
    value
  };
}
