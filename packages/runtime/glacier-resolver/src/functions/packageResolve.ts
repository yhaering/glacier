import { InvalidModuleSpecifier } from '../exceptions/InvalidModuleSpecifier';
import { ModuleNotFound } from '../exceptions/ModuleNotFound';
import { packageSelfResolve } from './packageSelfResolve';
import { readPackageJson } from './readPackageJson';
import { resolveFields } from './resolveFields';
import { packageExportsResolve } from './packageExportsResolve';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function packageResolve(
  packageSpecifier: string,
  parentURL: string,
  config: ResolverConfig
): string {
  const { fs } = config;
  let packageName: string | undefined;
  if (packageSpecifier === '') {
    throw new InvalidModuleSpecifier();
  }
  if (packageSpecifier.startsWith('node:')) {
    return packageSpecifier;
  }
  if (packageSpecifier.startsWith('@')) {
    if (!packageSpecifier.includes('/')) {
      throw new InvalidModuleSpecifier();
    }
    packageName = packageSpecifier.split('/').slice(0, 2).join('/');
  } else {
    packageName = packageSpecifier.split('/')[0];
  }

  if (
    packageName.startsWith('.') ||
    packageName.includes('\\') ||
    packageName.includes('%')
  ) {
    throw new InvalidModuleSpecifier();
  }
  const packageSubpath = `.${packageSpecifier.slice(packageName.length)}`;
  if (packageSubpath.endsWith('/')) {
    throw new InvalidModuleSpecifier();
  }
  const selfUrl = packageSelfResolve(
    packageName,
    packageSubpath,
    parentURL,
    config
  );
  if (selfUrl) {
    return selfUrl;
  }

  const { root } = fs.parse(parentURL);
  while (true) {
    const packageURL = fs.resolve(parentURL, 'node_modules', packageName);

    if (!fs.exists(packageURL)) {
      if (parentURL === root) {
        break;
      }
      parentURL = fs.resolve(parentURL, '../');
      continue;
    }
    const pjson = readPackageJson(packageURL, config);
    if (pjson) {
      const mainField = resolveFields(pjson, config);
      if (pjson.exports) {
        return packageExportsResolve(
          packageURL,
          packageSubpath,
          pjson.exports,
          config
        );
      } else if (packageSubpath === '.' && mainField) {
        return fs.resolve(packageURL, pjson[mainField]);
      }
    }
    return fs.resolve(packageURL, packageSubpath);
  }

  throw new ModuleNotFound();
}
