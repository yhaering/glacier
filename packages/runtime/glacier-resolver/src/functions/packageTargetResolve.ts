import type { Exports } from '../interfaces/Exports';
import { InvalidPackageTarget } from '../exceptions/InvalidPackageTarget';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { packageTargetResolveString } from './packageTargetResolveString';
import { packageTargetResolveArray } from './packageTargetResolveArray';
import { packageTargetResolveObject } from './packageTargetResolveObject';

export function packageTargetResolve(
  packageURL: string,
  target: Exports,
  patternMatch: string | undefined,
  config: ResolverConfig
): string | undefined {
  if (typeof target === 'string') {
    return packageTargetResolveString(packageURL, target, patternMatch, config);
  } else if (Array.isArray(target)) {
    return packageTargetResolveArray(packageURL, target, patternMatch, config);
  } else if (typeof target === 'object') {
    return packageTargetResolveObject(packageURL, target, patternMatch, config);
  } else if (target === undefined) {
    return undefined;
  }

  throw new InvalidPackageTarget();
}
