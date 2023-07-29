import type { ExportConditions } from '../interfaces/ExportConditions';
import { resolveModulePath } from './resolveModulePath';
import { InvalidPackageTarget } from '../exceptions/InvalidPackageTarget';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { packageTargetResolve } from './packageTargetResolve';

export function packageTargetResolveArray(
  packageURL: string,
  target: (string | ExportConditions)[],
  patternMatch: string | undefined,
  isImports: boolean,
  config: ResolverConfig
) {
  if (target.length === 0) {
    return;
  }
  for (const targetValue of target) {
    try {
      const resolved = packageTargetResolve(
        packageURL,
        targetValue,
        patternMatch,
        isImports,
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
