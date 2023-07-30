import type { ResolverConfig } from '../../interfaces/ResolverConfig';
import { isRoot } from '../checks/isRoot';

export function getPackageScope(
  url: string,
  config: ResolverConfig
): string | undefined {
  const { fs } = config;
  if (url.endsWith('node_modules')) {
    return;
  }
  const pjsonUrl = fs.resolve(url, 'package.json');
  if (fs.exists(pjsonUrl)) {
    return url;
  }

  if (!isRoot(url, config)) {
    const parentURL = fs.resolve(url, '../');
    return getPackageScope(parentURL, config);
  }
}
