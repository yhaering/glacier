import { packageTargetResolve } from './packageTargetResolve';
import type { Imports } from '../interfaces/Imports';
import type { ExportConditions } from '../interfaces/ExportConditions';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolveSubPaths(
  matchKey: string,
  matchObj: Imports | ExportConditions,
  packageURL: string,
  config: ResolverConfig
): string | undefined {
  if (matchKey.includes('*')) {
    return undefined;
  }
  const target = matchObj[matchKey];
  if (!target) {
    return undefined;
  }
  return packageTargetResolve(packageURL, target, undefined, config);
}
