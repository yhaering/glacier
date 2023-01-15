import path from 'path';
import { packageSelfResolve } from './packageSelfResolve';
import { packageExportsResolve } from './packageExportsResolve';
import { readPackageJson } from './readPackageJson';
import { parsePackageName } from './parsePackageName';
import type { ResolveConfig } from '../../types/ResolveConfig';
import { isRootPath } from '../fs/isRootPath';

export function packageResolve(
  packageSpecifier: string,
  parentURL: string,
  config: ResolveConfig
): string {
  const { fs } = config;
  const { packageName, packageSubPath } = parsePackageName(packageSpecifier);

  const selfUrl = packageSelfResolve(
    packageName,
    packageSubPath,
    parentURL,
    config
  );
  if (selfUrl !== undefined) {
    return selfUrl;
  }

  while (true) {
    const packageURL = path.resolve(parentURL, 'node_modules', packageName);

    if (!fs.existsSync(packageURL)) {
      if (isRootPath(parentURL)) {
        break;
      } else {
        parentURL = path.resolve(parentURL, '../');
        continue;
      }
    }

    const pjson = readPackageJson(packageURL, config);
    if (pjson && pjson.exports !== null && pjson.exports !== undefined) {
      return packageExportsResolve(
        packageURL,
        packageSubPath,
        pjson.exports,
        config
      );
    }

    if (packageSubPath === '.') {
      if (pjson) {
        for (const mainField of config.mainFields) {
          if (typeof pjson[mainField] === 'string') {
            return path.resolve(packageURL, pjson[mainField] as string);
          }
        }
      }
    } else {
      return path.resolve(parentURL, 'node_modules', packageSpecifier);
    }
  }

  throw new Error('Module Not Found');
}
