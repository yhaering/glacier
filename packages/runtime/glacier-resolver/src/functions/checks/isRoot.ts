import type { ResolverConfig } from '../../interfaces/ResolverConfig';

export function isRoot(path: string, config: ResolverConfig): boolean {
  const { root } = config.fs.parse(path);
  return path === root;
}
