import { PUNCTUATIONS } from '../constants/punctuations';

export function whilePunctuation(char: string, characters: string): boolean {
  return PUNCTUATIONS.some((symbol) => symbol.startsWith(characters + char));
}
