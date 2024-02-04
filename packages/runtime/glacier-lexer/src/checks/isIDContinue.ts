export function isIDContinue(char: string): boolean {
  return (
    /\p{ID_Continue}/u.test(char) ||
    char === '$' ||
    char === '\u200C' ||
    char === '\u200D'
  );
}
