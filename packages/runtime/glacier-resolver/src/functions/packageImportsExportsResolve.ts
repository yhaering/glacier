import type { ResolverConfig } from '../interfaces/ResolverConfig';
import type { Imports } from '../interfaces/Imports';
import type { ExportConditions } from '../interfaces/ExportConditions';
import { resolveSubPaths } from './resolveSubPaths';
import { resolveSubPathPatterns } from './resolveSubPathPatterns';

export function packageImportsExportsResolve(
  matchKey: string,
  matchObj: Imports | ExportConditions,
  packageURL: string,
  isImports: boolean,
  config: ResolverConfig
): string | undefined {
  return (
    resolveSubPaths(matchKey, matchObj, packageURL, isImports, config) ??
    resolveSubPathPatterns(matchKey, matchObj, packageURL, isImports, config)
  );
}
