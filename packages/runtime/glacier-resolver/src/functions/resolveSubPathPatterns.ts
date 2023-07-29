import { packageTargetResolve } from './packageTargetResolve';
import type { Imports } from '../interfaces/Imports';
import type { ExportConditions } from '../interfaces/ExportConditions';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { getExpansionKeys } from './getExpansionKeys';

export function resolveSubPathPatterns(
  matchKey: string,
  matchObj: Imports | ExportConditions,
  packageURL: string,
  config: ResolverConfig
): string | undefined {
  const expansionKeys = getExpansionKeys(matchObj);

  for (const expansionKey of expansionKeys) {
    const indexOfWildcard = expansionKey.indexOf('*');
    const patternBase = expansionKey.slice(0, Math.max(0, indexOfWildcard));

    if (matchKey === patternBase || !matchKey.startsWith(patternBase)) {
      continue;
    }

    const patternTrailer = expansionKey.slice(indexOfWildcard + 1);

    if (
      patternTrailer.length === 0 ||
      (matchKey.endsWith(patternTrailer) &&
        matchKey.length >= expansionKey.length)
    ) {
      const target = matchObj[expansionKey];
      const patternMatch = matchKey.slice(
        patternBase.length,
        matchKey.length - patternTrailer.length
      );
      return packageTargetResolve(packageURL, target, patternMatch, config);
    }
  }
}
