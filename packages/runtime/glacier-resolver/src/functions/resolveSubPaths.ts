import { packageTargetResolve } from './packageTargetResolve';
import type { ExportConditions } from '../interfaces/ExportConditions';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolveSubPaths(
  matchKey: string,
  matchObj: ExportConditions,
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
