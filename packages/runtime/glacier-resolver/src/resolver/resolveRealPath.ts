import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolveRealPath(
  parentURL: string,
  specifier: string,
  config: ResolverConfig,
  patternMatch?: string
): string {
  const { fs } = config;
  const resolvedTarget = fs.resolve(parentURL, specifier);

  if (!patternMatch) {
    return resolvedTarget;
  }

  return resolvedTarget.replaceAll('*', patternMatch);
}
