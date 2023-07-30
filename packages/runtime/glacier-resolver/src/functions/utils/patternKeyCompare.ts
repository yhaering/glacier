import { assertPatternKeyValid } from '../../assertions/assertPatternKeyValid';
import { getKeyBaseLength } from './getKeyBaseLength';

// eslint-disable-next-line sonarjs/cognitive-complexity
export function patternKeyCompare(keyA: string, keyB: string): 1 | 0 | -1 {
  assertPatternKeyValid(keyA);
  assertPatternKeyValid(keyB);
  const baseLengthA = getKeyBaseLength(keyA);
  const baseLengthB = getKeyBaseLength(keyB);

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
