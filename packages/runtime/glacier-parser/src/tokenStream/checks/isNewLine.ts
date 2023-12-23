export function isNewLine(char: string): boolean {
  return (
    char === '\u000A' ||
    char === '\u000D' ||
    char === '\u2028' ||
    char === '\u2029'
  );
}
