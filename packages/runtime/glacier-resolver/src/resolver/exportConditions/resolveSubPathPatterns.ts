import { resolvePackageTarget } from './resolvePackageTarget';
import type { ExportConditions } from '../../interfaces/ExportConditions';
import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { getExpansionKeys } from '../../functions/getExpansionKeys';
import { getPatternMatch } from '../../functions/getPatternMatch';

export function resolveSubPathPatterns(
  matchKey: string,
  matchObj: ExportConditions,
  packageURL: string,
  config: ResolverConfig
): string | undefined {
  const expansionKeys = getExpansionKeys(matchObj);

  for (const expansionKey of expansionKeys) {
    const patternMatch = getPatternMatch(matchKey, expansionKey);
    if (!patternMatch) {
      continue;
    }

    const target = matchObj[expansionKey];
    return resolvePackageTarget(packageURL, target, patternMatch, config);
  }
}
