import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { isRoot } from './isRoot';

export function lookupPackageScope(
  url: string,
  config: ResolverConfig
): string | undefined {
  const { fs } = config;
  if (url.endsWith('node_modules')) {
    return undefined;
  }
  const pjsonUrl = fs.resolve(url, 'package.json');
  if (fs.exists(pjsonUrl)) {
    return url;
  }

  if (isRoot(url, config)) {
    const parentURL = fs.resolve(url, '../');
    return lookupPackageScope(parentURL, config);
  }
}
