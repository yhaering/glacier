import { findFile } from './utils/findFile';
import { resolveDirectory } from './resolveDirectory';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolveModulePath(
  modulePath: string,
  config: ResolverConfig
): string | undefined {
  const { fs } = config;
  if (fs.exists(modulePath)) {
    if (fs.isDirectory(modulePath)) {
      return resolveDirectory(modulePath, config);
    }
    return modulePath;
  }

  return findFile(modulePath, config);
}
