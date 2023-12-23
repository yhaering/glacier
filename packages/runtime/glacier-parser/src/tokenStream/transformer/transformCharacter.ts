import type { Token } from '../interfaces/Token';
import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';

export function transformCharacter(characterStream: CharacterStream): Token {
  const nextChar = characterStream.next();
  return {
    type: 'IDENTIFIER',
    value: nextChar
  };
}
