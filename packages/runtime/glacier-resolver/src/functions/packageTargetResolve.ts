import { Exports } from '../interfaces/Exports';
import { isValidURL } from './isValidURL';
import { InvalidPackageTarget } from '../exceptions/InvalidPackageTarget';
import { ExportConditions } from '../interfaces/ExportConditions';
import { resolveModulePath } from './resolveModulePath';
import { packageResolve } from './packageResolve';
import { FileSystem } from '@glacier/fs';
import { ResolverConfig } from '../interfaces/ResolverConfig';

export function packageTargetResolve(
  packageURL: string,
  target: Exports,
  patternMatch: string | undefined,
  isImports: boolean,
  config: ResolverConfig
): string | undefined {
  const { fs, conditions } = config;
  if (typeof target === 'string') {
    if (!target.startsWith('./')) {
      if (
        !isImports ||
        target.startsWith('../') ||
        target.startsWith('/') ||
        isValidURL(target)
      ) {
        throw new InvalidPackageTarget();
      }
      if (typeof patternMatch === 'string') {
        return packageResolve(
          target.replaceAll('*', patternMatch),
          packageURL + '/',
          config
        );
      }
      return packageResolve(target, packageURL + '/', config);
    }

    const resolvedTarget = fs.resolve(packageURL, target);

    if (!patternMatch) {
      return resolvedTarget;
    }

    return fs.resolve(resolvedTarget.replaceAll('*', patternMatch));
  } else if (Array.isArray(target)) {
    if ((target as Array<string | ExportConditions>).length === 0) {
      return undefined;
    }
    for (const targetValue of target as Array<string | ExportConditions>) {
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
  } else if (typeof target === 'object') {
    for (const p in target) {
      if (p === 'default' || conditions.includes(p)) {
        const targetValue = (target as any)[p as any];
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
    return undefined;
  } else if (target === undefined) {
    return undefined;
  }

  throw new InvalidPackageTarget();
}
