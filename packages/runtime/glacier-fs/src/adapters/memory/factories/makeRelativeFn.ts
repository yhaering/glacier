import type { RelativeFn } from '../../../interfaces/functions/RelativeFn';
import { assertAbsolutePath } from '../assertions/assertAbsolutePath';

export function makeRelativeFn(): RelativeFn {
  return (from, to) => {
    assertAbsolutePath(from);
    assertAbsolutePath(to);
    const fromParts = from.split('/').filter(Boolean);
    const toParts = to.split('/').filter(Boolean);

    const length = Math.min(fromParts.length, toParts.length);
    let samePartsLength = length;
    for (let i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    let outputParts = [];
    for (let i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = [...outputParts, ...toParts.slice(samePartsLength)];

    return outputParts.join('/');
  };
}
