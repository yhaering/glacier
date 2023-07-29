import { isValidURL } from './isValidURL';
import { InvalidPackageTarget } from '../exceptions/InvalidPackageTarget';
import { packageResolve } from './packageResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function packageTargetResolveString(
  packageURL: string,
  target: string,
  patternMatch: string | undefined,
  isImports: boolean,
  config: ResolverConfig
) {
  const { fs } = config;
  if (!target.startsWith('./')) {
    if (
      !isImports ||
      target.startsWith('../') ||
      target.startsWith('/') ||
      isValidURL(target)
    ) {
      throw new InvalidPackageTarget();
    }
    if (typeof patternMatch === 'string') {
      return packageResolve(
        target.replaceAll('*', patternMatch),
        packageURL + '/',
        config
      );
    }
    return packageResolve(target, packageURL + '/', config);
  }

  const resolvedTarget = fs.resolve(packageURL, target);

  if (!patternMatch) {
    return resolvedTarget;
  }

  return fs.resolve(resolvedTarget.replaceAll('*', patternMatch));
}
