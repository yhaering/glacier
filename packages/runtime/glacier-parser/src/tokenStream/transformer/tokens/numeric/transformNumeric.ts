import type { CharacterStream } from '../../../../characterStream/interfaces/CharacterStream';
import type { NumericToken } from '../../../interfaces/tokens/NumericToken';
import { transformDecimal } from './transformDecimal';
import { transformBinary } from './transformBinary';
import { transformOctal } from './transformOctal';
import { transformHexadecimal } from './transformHexadecimal';
import { isBinary } from '../../../checks/isBinary';
import { isOctal } from '../../../checks/isOctal';
import { isHexadecimal } from '../../../checks/isHexadecimal';

export function transformNumeric(
  characterStream: CharacterStream
): NumericToken {
  const firstCharacter = characterStream.next();

  if (firstCharacter !== '0') {
    return transformDecimal(characterStream, firstCharacter);
  }

  const secondCharacter = characterStream.peek();
  if (isHexadecimal(secondCharacter)) {
    return transformHexadecimal(characterStream);
  } else if (isOctal(secondCharacter)) {
    return transformOctal(characterStream);
  } else if (isBinary(secondCharacter)) {
    return transformBinary(characterStream);
  } else if (secondCharacter === '.') {
    return transformDecimal(characterStream, firstCharacter);
  }

  return {
    type: 'NUMERIC',
    value: '0'
  };
}
