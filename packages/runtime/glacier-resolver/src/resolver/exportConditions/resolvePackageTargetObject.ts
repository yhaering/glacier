import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { resolvePackageTarget } from './resolvePackageTarget';
import type { ExportConditions } from '../../interfaces/ExportConditions';
import { filterConditions } from '../../functions/filterConditions';

export function resolvePackageTargetObject(
  packageURL: string,
  target: ExportConditions,
  patternMatch: string | undefined,
  config: ResolverConfig
) {
  const conditions = filterConditions(Object.keys(target), config);
  for (const condition of conditions) {
    const targetValue = target[condition];
    const resolved = resolvePackageTarget(
      packageURL,
      targetValue,
      patternMatch,
      config
    );

    if (resolved) {
      return resolved;
    }
  }
}
