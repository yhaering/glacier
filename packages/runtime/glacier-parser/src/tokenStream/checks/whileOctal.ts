export function whileOctal(char: string, consumedChars: string): boolean {
  if (consumedChars.at(-1) === 'n') {
    return false;
  }
  return (
    char === '0' ||
    char === '1' ||
    char === '2' ||
    char === '3' ||
    char === '4' ||
    char === '5' ||
    char === '6' ||
    char === '7' ||
    char === 'n' ||
    char === '_'
  );
}
