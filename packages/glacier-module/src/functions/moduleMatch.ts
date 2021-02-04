import { ResolvedModule } from '../ResolvedModule';
import { ModuleFilter } from '../ModuleFilter';

/**
 * Returns true if the given module matches the filter config.
 * @param module
 * @param filter
 */
export function moduleMatch(module: ResolvedModule, filter: ModuleFilter): boolean {
  const moduleSourcePath = module.getSourcePath();
  const { process, exclude = [] } = filter;

  if (process.some((rule) => moduleSourcePath.match(rule))) {
    if (!exclude.some((rule) => moduleSourcePath.match(rule))) {
      return true;
    }
  }
  return false;
}
