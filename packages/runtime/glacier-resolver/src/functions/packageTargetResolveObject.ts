import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { packageTargetResolve } from './packageTargetResolve';
import type { ExportConditions } from '../interfaces/ExportConditions';

export function packageTargetResolveObject(
  packageURL: string,
  target: ExportConditions,
  patternMatch: string | undefined,
  isImports: boolean,
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
        isImports,
        config
      );
      if (resolved) {
        return resolved;
      }
    }
  }
}
