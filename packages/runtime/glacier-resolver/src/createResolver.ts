import type { ResolverConfig } from './interfaces/ResolverConfig';
import { resolve } from './functions/resolve';

export function createResolver(config: ResolverConfig) {
  return (specifier: string, parentURL: string) => {
    return resolve(specifier, parentURL, config);
  };
}
