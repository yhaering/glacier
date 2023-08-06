import { resolvePackage } from '../resolvePackage';
import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { isValidExportTarget } from '../../conditions/isValidExportTarget';
import { resolveRealPath } from '../resolveRealPath';

export function resolvePackageTargetString(
  packageURL: string,
  target: string,
  patternMatch: string | undefined,
  config: ResolverConfig
) {
  if (target.startsWith('./')) {
    return resolveRealPath(packageURL, target, config, patternMatch);
  }

  if (!isValidExportTarget(target)) {
    return;
  }

  if (patternMatch) {
    return resolvePackage(
      target.replaceAll('*', patternMatch),
      packageURL + '/',
      config
    );
  }

  return resolvePackage(target, packageURL + '/', config);
}
