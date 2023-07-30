import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { resolvePackageTarget } from './resolvePackageTarget';
import type { ExportConditions } from '../../interfaces/ExportConditions';

export function resolvePackageTargetObject(
  packageURL: string,
  target: ExportConditions,
  patternMatch: string | undefined,
  config: ResolverConfig
) {
  const { conditions } = config;
  for (const p in target) {
    if (p === 'default' || conditions.includes(p)) {
      const targetValue = target[p];
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
}
