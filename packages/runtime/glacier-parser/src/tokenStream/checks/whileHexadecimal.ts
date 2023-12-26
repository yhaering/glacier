export function whileHexadecimal(char: string, consumedChars: string): boolean {
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
    char === '8' ||
    char === '9' ||
    char === 'a' ||
    char === 'b' ||
    char === 'c' ||
    char === 'd' ||
    char === 'e' ||
    char === 'f' ||
    char === 'A' ||
    char === 'B' ||
    char === 'C' ||
    char === 'D' ||
    char === 'E' ||
    char === 'F' ||
    char === 'n' ||
    char === '_'
  );
}
