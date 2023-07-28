import { findFile } from './findFile';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolveDirectory(
  url: string,
  config: ResolverConfig
): string | undefined {
  const { fs } = config;
  const joinedPath = fs.resolve(url, 'index');
  return findFile(joinedPath, config);
}
