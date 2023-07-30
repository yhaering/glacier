import { resolvePackageTarget } from './resolvePackageTarget';
import type { ExportConditions } from '../../interfaces/ExportConditions';
import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { getExpansionKeys } from '../utils/getExpansionKeys';

export function resolveSubPathPatterns(
  matchKey: string,
  matchObj: ExportConditions,
  packageURL: string,
  config: ResolverConfig
): string | undefined {
  const expansionKeys = getExpansionKeys(matchObj);

  for (const expansionKey of expansionKeys) {
    const [base, trailer] = expansionKey.split('*');
    const isMatching = matchKey.startsWith(base) && matchKey.endsWith(trailer);

    if (!isMatching) {
      continue;
    }

    const target = matchObj[expansionKey];
    const from = base.length;
    const to = matchKey.length - trailer.length;
    const patternMatch = matchKey.slice(from, to);
    return resolvePackageTarget(packageURL, target, patternMatch, config);
  }
}
