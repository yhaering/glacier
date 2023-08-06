import type { ExportConditions } from '../../interfaces/ExportConditions';
import { resolveModulePath } from '../resolveModulePath';
import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { resolvePackageTarget } from './resolvePackageTarget';

export function resolvePackageTargetArray(
  packageURL: string,
  target: (string | ExportConditions)[],
  patternMatch: string | undefined,
  config: ResolverConfig
) {
  for (const targetValue of target) {
    const resolved = resolvePackageTarget(
      packageURL,
      targetValue,
      patternMatch,
      config
    );

    if (!resolved) {
      continue;
    }

    const resolvedModulePath = resolveModulePath(resolved, config);
    if (!resolvedModulePath) {
      continue;
    }

    return resolvedModulePath;
  }
}
