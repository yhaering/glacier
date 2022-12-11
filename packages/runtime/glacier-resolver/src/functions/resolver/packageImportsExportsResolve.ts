import type { Exports, Optional } from '@glacier/types';
import { patternKeyCompare } from './patternKeyCompare';
import { packageTargetResolve } from './packageTargetResolve';
import type { ResolveConfig } from '../../types/ResolveConfig';

export function packageImportsExportsResolve(
  matchKey: string,
  matchObj: { [path: string]: Exports },
  packageURL: string,
  isImports: boolean,
  config: ResolveConfig
): Optional<string> {
  // 1. If matchKey is a key of matchObj and does not contain "*", then
  if (matchObj.hasOwnProperty(matchKey) && !matchKey.includes('*')) {
    //    1. Let target be the value of matchObj[matchKey].
    const target = matchObj[matchKey];

    //    2. Return the result of PACKAGE_TARGET_RESOLVE(packageURL, target, null, isImports).
    return packageTargetResolve(packageURL, target, null, isImports, config);
  }

  // 2. Let expansionKeys be the list of keys of matchObj containing only a single "*", sorted by the sorting function PATTERN_KEY_COMPARE which orders in descending order of specificity.
  const expansionKeys = Object.keys(matchObj)
    .filter((key) => key.includes('*'))
    .sort(patternKeyCompare);

  // 3. For each key expansionKey in expansionKeys, do
  for (const expansionKey of expansionKeys) {
    //    1. Let patternBase be the substring of expansionKey up to but excluding the first "*" character.
    const patternBase = expansionKey.substring(0, expansionKey.indexOf('*'));

    //    2. If matchKey starts with but is not equal to patternBase, then
    if (matchKey.startsWith(patternBase) && matchKey !== patternBase) {
      //       1. Let patternTrailer be the substring of expansionKey from the index after the first "*" character.
      const patternTrailer = expansionKey.substring(
        expansionKey.indexOf('*') + 1
      );

      //       2. If patternTrailer has zero length, or if matchKey ends with patternTrailer and the length of matchKey is greater than or equal to the length of expansionKey, then
      if (
        !patternTrailer ||
        (matchKey.endsWith(patternTrailer) &&
          matchKey.length >= expansionKey.length)
      ) {
        //          1. Let target be the value of matchObj[expansionKey].
        const target = matchObj[expansionKey];

        //          2. Let patternMatch be the substring of matchKey starting at the index of the length of patternBase up to the length of matchKey minus the length of patternTrailer.
        const patternMatch = matchKey.substring(
          patternBase.length,
          matchKey.length - patternTrailer.length
        );

        //          3. Return the result of PACKAGE_TARGET_RESOLVE(packageURL, target, patternMatch, isImports).
        return packageTargetResolve(
          packageURL,
          target,
          patternMatch,
          isImports,
          config
        );
      }
    }
  }

  // 4. Return null.
  return;
}
