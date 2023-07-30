import { isValidURL } from '../conditions/isValidURL';
import { isRealPath } from '../conditions/isRealPath';
import { resolvePackageImports } from './resolvePackageImports';
import { resolvePackage } from './resolvePackage';
import { resolveModulePath } from './resolveModulePath';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { isPrivateMapping } from '../conditions/isPrivateMapping';
import { resolveRealPath } from './resolveRealPath';

export function resolve(
  specifier: string,
  parentURL: string,
  config: ResolverConfig
): string | undefined {
  let resolved: string | undefined;

  if (isValidURL(specifier)) {
    return specifier;
  } else if (isRealPath(specifier)) {
    resolved = resolveRealPath(parentURL, specifier, config);
  } else if (isPrivateMapping(specifier)) {
    resolved = resolvePackageImports(specifier, parentURL, config);
  } else {
    resolved = resolvePackage(specifier, parentURL, config);
  }

  if (resolved === undefined) {
    return;
  }

  return resolveModulePath(resolved, config);
}
