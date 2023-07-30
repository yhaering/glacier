import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { isRoot } from './checks/isRoot';
import { resolvePjson } from './resolvePjson';

export function resolveModule(
  parentURL: string,
  packageName: string,
  packageSubPath: string,
  config: ResolverConfig
): string | undefined {
  const { fs } = config;

  const packageURL = fs.resolve(parentURL, 'node_modules', packageName);
  if (!fs.exists(packageURL)) {
    if (isRoot(parentURL, config)) {
      return;
    }
    const parentPath = fs.resolve(parentURL, '../');
    return resolveModule(parentPath, packageName, packageSubPath, config);
  }

  return resolvePjson(packageURL, packageSubPath, config);
}
