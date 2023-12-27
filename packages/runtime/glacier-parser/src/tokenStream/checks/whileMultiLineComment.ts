export function whileMultiLineComment(
  char: string,
  characters: string
): boolean {
  return characters.slice(-2) !== '*/';
}
