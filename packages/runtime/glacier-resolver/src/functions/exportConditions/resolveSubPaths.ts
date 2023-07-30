import { resolvePackageTarget } from './resolvePackageTarget';
import type { ExportConditions } from '../../interfaces/ExportConditions';
import type { ResolverConfig } from '../../interfaces/ResolverConfig';

export function resolveSubPaths(
  matchKey: string,
  matchObj: ExportConditions,
  packageURL: string,
  config: ResolverConfig
): string | undefined {
  if (matchKey.includes('*')) {
    return;
  }
  const target = matchObj[matchKey];
  if (!target) {
    return;
  }
  return resolvePackageTarget(packageURL, target, undefined, config);
}
