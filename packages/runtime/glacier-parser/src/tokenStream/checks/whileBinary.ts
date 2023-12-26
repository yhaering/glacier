export function whileBinary(char: string, consumedChars: string): boolean {
  if (consumedChars.at(-1) === 'n') {
    return false;
  }
  return char === '0' || char === '1' || char === 'n' || char === '_';
}
