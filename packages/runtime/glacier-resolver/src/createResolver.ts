import { ResolverConfig } from './interfaces/ResolverConfig';
import { esmResolve } from './functions/esmResolve';

export function createResolver(config: ResolverConfig) {
  return (specifier: string, parentURL: string) => {
    return esmResolve(specifier, parentURL, config);
  };
}
