export function isIdentifier(char: string): boolean {
  return char === '$' || char === '_' || /\p{ID_Start}/u.test(char);
}
