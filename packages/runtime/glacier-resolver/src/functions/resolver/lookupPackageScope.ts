import type { Optional } from '@glacier/types';
import path from 'path';
import { isRootPath } from '../fs/isRootPath';
import type { ResolveConfig } from '../../types/ResolveConfig';

export function lookupPackageScope(
  url: string,
  config: ResolveConfig
): Optional<string> {
  const { fs } = config;
  let scopeURL = url;

  while (!isRootPath(scopeURL)) {
    scopeURL = path.resolve(scopeURL, '../');

    if (scopeURL.endsWith('/node_modules')) {
      return;
    }

    const pjsonURL = path.resolve(scopeURL, 'package.json');

    if (fs.existsSync(pjsonURL)) {
      return scopeURL;
    }
  }

  return;
}
