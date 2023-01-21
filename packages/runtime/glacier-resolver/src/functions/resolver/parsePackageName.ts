import type { ParsedPackageName } from '../../types/ParsedPackageName';

export function parsePackageName(packageSpecifier: string): ParsedPackageName {
  let packageName = undefined;

  if (packageSpecifier === '') {
    throw new Error('Invalid Module Specifier');
  }

  if (packageSpecifier[0] !== '@') {
    packageName = packageSpecifier.split('/')[0];
  } else {
    if (!packageSpecifier.includes('/')) {
      throw new Error('Invalid Module Specifier');
    }

    packageName = `${packageSpecifier.split('/')[0]}/${
      packageSpecifier.split('/')[1]
    }`;
  }

  if (
    packageName.startsWith('.') ||
    packageName.includes('\\') ||
    packageName.includes('%')
  ) {
    throw new Error('Invalid Module Specifier');
  }

  const packageSubPath = '.' + packageSpecifier.slice(packageName.length);

  if (packageSubPath.endsWith('/')) {
    throw new Error('Invalid Module Specifier');
  }

  return {
    packageName,
    packageSubPath
  };
}
