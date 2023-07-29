import type { ResolverConfig } from '../interfaces/ResolverConfig';
import type { Imports } from '../interfaces/Imports';
import type { ExportConditions } from '../interfaces/ExportConditions';
import { resolveSubPaths } from './resolveSubPaths';
import { resolveSubPathPatterns } from './resolveSubPathPatterns';

export function packageImportsExportsResolve(
  matchKey: string,
  matchObj: Imports | ExportConditions,
  packageURL: string,
  config: ResolverConfig
): string | undefined {
  return (
    resolveSubPaths(matchKey, matchObj, packageURL, config) ??
    resolveSubPathPatterns(matchKey, matchObj, packageURL, config)
  );
}
