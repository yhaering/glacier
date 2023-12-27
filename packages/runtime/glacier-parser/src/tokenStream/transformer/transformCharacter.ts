import type { Token } from '../interfaces/Token';
import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';
import { transformUnknown } from './tokens/unknown/transformUnknown';
import { isLineTerminator } from '../checks/isLineTerminator';
import { transformLineTerminator } from './tokens/lineTerminator/transformLineTerminator';
import { isWhitespace } from '../checks/isWhitespace';
import { transformWhitespace } from './tokens/whitespace/transformWhitespace';
import { isString } from '../checks/isString';
import { transformString } from './tokens/string/transformString';
import { isNumber } from '../checks/isNumber';
import { transformNumeric } from './tokens/numeric/transformNumeric';
import { isSymbol } from '../checks/isSymbol';
import { transformPunctuation } from './tokens/punctuation/transformPunctuation';
import { isIdentifier } from '../checks/isIdentifier';
import { transformIdentifier } from './tokens/identifier/transformIdentifier';
import { transformSingleLineComment } from './tokens/comment/transformSingleLineComment';
import { transformMultiLineComment } from './tokens/comment/transformMultiLineComment';

/* eslint-disable max-lines */
// eslint-disable-next-line sonarjs/cognitive-complexity
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

  if (isNumber(nextChar)) {
    return transformNumeric(characterStream);
  }

  if (nextChar === '.') {
    const secondChar = characterStream.peek(1);
    if (isNumber(secondChar)) {
      return transformNumeric(characterStream);
    }
  }

  if (nextChar === '/') {
    const secondChar = characterStream.peek(1);
    if (secondChar === '/') {
      return transformSingleLineComment(characterStream);
    }

    if (secondChar === '*') {
      return transformMultiLineComment(characterStream);
    }
  }

  if (isSymbol(nextChar)) {
    return transformPunctuation(characterStream);
  }

  if (isIdentifier(nextChar)) {
    return transformIdentifier(characterStream);
  }

  return transformUnknown(characterStream);
}
