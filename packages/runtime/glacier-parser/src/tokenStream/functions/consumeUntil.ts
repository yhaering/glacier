import type { CharacterStream } from '../../characterStream/interfaces/CharacterStream';

export type ConsumeFn = (char: string, consumedStr: string) => boolean;

export function consumeUntil(
  characterStream: CharacterStream,
  consumeFn: ConsumeFn,
  consumedStr: string = ''
): string {
  let nextChar;
  while ((nextChar = characterStream.peek())) {
    if (!consumeFn(nextChar, consumedStr)) {
      break;
    }
    consumedStr += characterStream.next();
  }
  return consumedStr;
}
