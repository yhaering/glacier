import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { packageTargetResolve } from './packageTargetResolve';
import type { ExportConditions } from '../interfaces/ExportConditions';

export function packageTargetResolveObject(
  packageURL: string,
  target: ExportConditions,
  patternMatch: string | undefined,
  config: ResolverConfig
) {
  const { conditions } = config;
  for (const p in target) {
    if (p === 'default' || conditions.includes(p)) {
      const targetValue = target[p];
      const resolved = packageTargetResolve(
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
