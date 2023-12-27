export function whileIdentifier(char: string): boolean {
  return char === '$' || /\p{ID_Continue}/u.test(char);
}
