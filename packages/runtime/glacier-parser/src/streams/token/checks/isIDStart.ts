export function isIDStart(char: string): boolean {
  return /\p{ID_Start}/u.test(char) || char === '$' || char === '_';
}
