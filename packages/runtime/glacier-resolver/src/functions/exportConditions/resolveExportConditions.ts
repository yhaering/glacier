import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import type { ExportConditions } from '../../interfaces/ExportConditions';
import { resolveSubPaths } from './resolveSubPaths';
import { resolveSubPathPatterns } from './resolveSubPathPatterns';

export function resolveExportConditions(
  matchKey: string,
  matchObj: ExportConditions,
  packageURL: string,
  config: ResolverConfig
): string | undefined {
  return (
    resolveSubPaths(matchKey, matchObj, packageURL, config) ??
    resolveSubPathPatterns(matchKey, matchObj, packageURL, config)
  );
}
