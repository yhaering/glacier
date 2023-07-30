import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { ModuleNotFound } from '../exceptions/ModuleNotFound';
import { isRoot } from './checks/isRoot';
import { resolvePjson } from './resolvePjson';

export function resolveModule(
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
    return resolveModule(parentPath, packageName, packageSubPath, config);
  }

  return resolvePjson(packageURL, packageSubPath, config);
}
