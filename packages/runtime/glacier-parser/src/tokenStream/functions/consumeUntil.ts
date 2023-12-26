import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';

export type ConsumeFn = (char: string) => boolean;

export function consumeUntil(
  characterStream: CharacterStream,
  consumeFn: ConsumeFn
): string {
  let consumedStr = '';
  let nextChar;
  while ((nextChar = characterStream.peek())) {
    if (!consumeFn(nextChar)) {
      break;
    }
    consumedStr += characterStream.next();
  }
  return consumedStr;
}
