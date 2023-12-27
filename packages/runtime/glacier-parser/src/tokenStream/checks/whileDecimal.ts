import { isNumber } from './isNumber';

// eslint-disable-next-line sonarjs/cognitive-complexity
export function whileDecimal(char: string, characters: string) {
  const lastChar = characters.slice(-1);
  if (lastChar === 'n') {
    return false;
  }

  if (char === 'n' || char === '_') {
    return true;
  }

  if (char === '.') {
    return !characters.includes('.');
  }
  if (char === 'e' || char === 'E') {
    return !(characters.includes('e') || characters.includes('E'));
  }

  if (char === '+' || char === '-') {
    return lastChar === 'E' || lastChar === 'e';
  }

  return isNumber(char);
}
