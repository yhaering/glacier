import type { Exports } from '../../interfaces/Exports';
import { InvalidPackageTarget } from '../../exceptions/InvalidPackageTarget';
import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { resolvePackageTargetString } from './resolvePackageTargetString';
import { resolvePackageTargetArray } from './resolvePackageTargetArray';
import { resolvePackageTargetObject } from './resolvePackageTargetObject';

export function resolvePackageTarget(
  packageURL: string,
  target: Exports,
  patternMatch: string | undefined,
  config: ResolverConfig
): string | undefined {
  if (typeof target === 'string') {
    return resolvePackageTargetString(packageURL, target, patternMatch, config);
  } else if (Array.isArray(target)) {
    return resolvePackageTargetArray(packageURL, target, patternMatch, config);
  } else if (typeof target === 'object') {
    return resolvePackageTargetObject(packageURL, target, patternMatch, config);
  } else if (target === undefined) {
    return undefined;
  }

  throw new InvalidPackageTarget();
}
