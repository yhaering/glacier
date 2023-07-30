import { isValidURL } from './checks/isValidURL';
import { isRealPath } from './checks/isRealPath';
import { ModuleNotFound } from '../exceptions/ModuleNotFound';
import { packageImportsResolve } from './packageImportsResolve';
import { packageResolve } from './packageResolve';
import { resolveModulePath } from './resolveModulePath';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { isPrivateMapping } from './checks/isPrivateMapping';

export function esmResolve(
  specifier: string,
  parentURL: string,
  config: ResolverConfig
): string {
  const { fs } = config;
  let resolved: string | undefined;

  if (isValidURL(specifier)) {
    return specifier;
  } else if (isRealPath(specifier)) {
    resolved = fs.resolve(parentURL, specifier);
  } else if (isPrivateMapping(specifier)) {
    resolved = packageImportsResolve(specifier, parentURL, config);
  } else {
    resolved = packageResolve(specifier, parentURL, config);
  }

  const resolvedModulePath = resolveModulePath(resolved, config);
  if (!resolvedModulePath) {
    throw new ModuleNotFound();
  }
  return resolvedModulePath;
}
