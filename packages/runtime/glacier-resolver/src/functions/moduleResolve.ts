import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { ModuleNotFound } from '../exceptions/ModuleNotFound';
import { isRoot } from './isRoot';
import { resolvePjson } from './resolvePjson';

export function moduleResolve(
  parentURL: string,
  packageName: string,
  packageSubPath: string,
  config: ResolverConfig
): string {
  const { fs } = config;

  const packageURL = fs.resolve(parentURL, 'node_modules', packageName);
  if (!fs.exists(packageURL)) {
    if (isRoot(parentURL, config)) {
      throw new ModuleNotFound();
    }
    const parentPath = fs.resolve(parentURL, '../');
    return moduleResolve(parentPath, packageName, packageSubPath, config);
  }

  return resolvePjson(packageURL, packageSubPath, config);
}
