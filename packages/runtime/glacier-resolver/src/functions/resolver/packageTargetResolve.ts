import { packageResolve } from './packageResolve';
import path from 'path';
import type { Exports, Optional } from '@glacier/types';
import type { ResolveConfig } from '../../types/ResolveConfig';

export function packageTargetResolve(
  packageURL: string,
  target: Exports,
  patternMatch: string | null,
  isImports: boolean,
  config: ResolveConfig
): Optional<string> {
  if (target === null || target === undefined) {
    return;
  } else if (typeof target === 'string') {
    if (!target.startsWith('./')) {
      if (!isImports || target.startsWith('../') || target.startsWith('/')) {
        throw new Error('Invalid Package Target');
      }

      if (typeof patternMatch === 'string') {
        return packageResolve(
          target.replace('*', patternMatch),
          packageURL + '/',
          config
        );
      }

      return packageResolve(target, packageURL + '/', config);
    }

    if (
      target.split(/\/|\\/).slice(1).includes('') ||
      target.split(/\/|\\/).slice(1).includes('.') ||
      target.split(/\/|\\/).slice(1).includes('..') ||
      target.split(/\/|\\/).slice(1).includes('node_modules')
    ) {
      throw new Error('Invalid Package Target');
    }

    const resolvedTarget = path.resolve(packageURL, target);
    // Assert: resolvedTarget is contained in packageURL
    if (patternMatch === null) {
      return resolvedTarget;
    }

    if (
      patternMatch.split(/\/|\\/).includes('') ||
      patternMatch.split(/\/|\\/).includes('.') ||
      patternMatch.split(/\/|\\/).includes('..') ||
      patternMatch.split(/\/|\\/).includes('node_modules')
    ) {
      throw new Error('Invalid Module Specifier');
    }

    return path.resolve(resolvedTarget.replace('*', patternMatch));
  } else if (Array.isArray(target)) {
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
        if (resolved === undefined) {
          continue;
        }
        return resolved;
      } catch (error) {
        if ((error as Error).message === 'Invalid Package Target') {
          continue;
        }
        throw error;
      }
    }
    return;
  } else if (typeof target === 'object') {
    if (Object.keys(target).some((key) => key.match(/^\d+$/))) {
      throw new Error('Invalid Package Configuration');
    }

    for (const p in target) {
      if (p === 'default' || config.conditions.includes(p)) {
        const targetValue = (target as { [path: string]: Exports })[p];
        const resolved = packageTargetResolve(
          packageURL,
          targetValue,
          patternMatch,
          isImports,
          config
        );
        if (resolved === undefined) {
          continue;
        }
        return resolved;
      }
    }
    return undefined;
  } else {
    throw new Error('Invalid Package Target');
  }
}
