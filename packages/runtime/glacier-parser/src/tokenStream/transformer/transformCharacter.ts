import type { Token } from '../interfaces/Token';
import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';
import { transformUnknown } from './tokens/unknown/transformUnknown';
import { isLineTerminator } from '../checks/isLineTerminator';
import { transformLineTerminator } from './tokens/lineTerminator/transformLineTerminator';
import { isWhitespace } from '../checks/isWhitespace';
import { transformWhitespace } from './tokens/whitespace/transformWhitespace';
import { isString } from '../checks/isString';
import { transformString } from './tokens/string/transformString';

export function transformCharacter(
  characterStream: CharacterStream
): Token | undefined {
  const nextChar = characterStream.peek();
  if (!nextChar) {
    return;
  }

  if (isLineTerminator(nextChar)) {
    return transformLineTerminator(characterStream);
  }

  if (isWhitespace(nextChar)) {
    return transformWhitespace(characterStream);
  }

  if (isString(nextChar)) {
    return transformString(characterStream);
  }

  return transformUnknown(characterStream);
}
