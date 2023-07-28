import { assertPatternKeyValid } from '../assertions/assertPatternKeyValid';

export function patternKeyCompare(keyA: string, keyB: string): 1 | 0 | -1 {
  assertPatternKeyValid(keyA);
  assertPatternKeyValid(keyB);
  const baseLengthA = keyA.includes('*') ? keyA.indexOf('*') + 1 : keyA.length;
  const baseLengthB = keyB.includes('*') ? keyB.indexOf('*') + 1 : keyB.length;

  if (baseLengthA > baseLengthB) {
    return -1;
  }

  if (baseLengthB > baseLengthA) {
    return 1;
  }

  if (!keyA.includes('*')) {
    return 1;
  }

  if (!keyB.includes('*')) {
    return -1;
  }

  if (keyA.length > keyB.length) {
    return -1;
  }

  if (keyB.length > keyA.length) {
    return 1;
  }

  return 0;
}
