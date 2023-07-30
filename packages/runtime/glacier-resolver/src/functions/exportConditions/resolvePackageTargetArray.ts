import type { ExportConditions } from '../../interfaces/ExportConditions';
import { resolveModulePath } from '../resolveModulePath';
import { InvalidPackageTarget } from '../../exceptions/InvalidPackageTarget';
import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { resolvePackageTarget } from './resolvePackageTarget';

export function resolvePackageTargetArray(
  packageURL: string,
  target: (string | ExportConditions)[],
  patternMatch: string | undefined,
  config: ResolverConfig
) {
  if (target.length === 0) {
    return;
  }
  for (const targetValue of target) {
    try {
      const resolved = resolvePackageTarget(
        packageURL,
        targetValue,
        patternMatch,
        config
      );

      if (resolved) {
        const resolvedModulePath = resolveModulePath(resolved, config);
        if (resolvedModulePath) {
          return resolvedModulePath;
        }
      }
    } catch (error) {
      if (error instanceof InvalidPackageTarget) {
        continue;
      }
      throw error;
    }
  }

  throw new InvalidPackageTarget();
}
