import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function lookupPackageScope(
  url: string,
  { fs }: ResolverConfig
): string | undefined {
  let scopeURL = url;
  const { root } = fs.parse(url);
  do {
    scopeURL = fs.resolve(scopeURL, '../');
    if (scopeURL.endsWith('node_modules')) {
      return undefined;
    }

    const pjsonURL = fs.resolve(scopeURL, 'package.json');
    if (fs.exists(pjsonURL)) {
      return scopeURL;
    }
  } while (scopeURL !== root);
  return undefined;
}
