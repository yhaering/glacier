import { packageTargetResolve } from './packageTargetResolve';
import { patternKeyCompare } from './patternKeyCompare';
import { ResolverConfig } from '../interfaces/ResolverConfig';

export function packageImportsExportsResolve(
  matchKey: string,
  matchObj: any,
  packageURL: string,
  isImports: boolean,
  config: ResolverConfig
): string | undefined {
  if (matchObj[matchKey] && !matchKey.includes('*')) {
    const target = matchObj[matchKey];
    return packageTargetResolve(
      packageURL,
      target,
      undefined,
      isImports,
      config
    );
  }
  const expansionKeys = Object.keys(matchObj)
    .filter((key) => {
      return (key.match(/\*/g) || []).length === 1;
    })
    .sort(patternKeyCompare);
  for (const expansionKey of expansionKeys) {
    const indexOfWildcard = expansionKey.indexOf('*');
    const patternBase = expansionKey.slice(0, Math.max(0, indexOfWildcard));
    if (matchKey !== patternBase && matchKey.startsWith(patternBase)) {
      const patternTrailer = expansionKey.slice(indexOfWildcard + 1);
      if (
        patternTrailer.length === 0 ||
        (matchKey.endsWith(patternTrailer) &&
          matchKey.length >= expansionKey.length)
      ) {
        const target = matchObj[expansionKey];
        const patternMatch = matchKey.substring(
          patternBase.length,
          matchKey.length - patternTrailer.length
        );
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
  return undefined;
}
