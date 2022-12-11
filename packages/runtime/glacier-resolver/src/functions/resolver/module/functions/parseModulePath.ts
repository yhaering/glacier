import type { ParsedModulePath } from '../../../../types/ParsedModulePath';

export function parseModulePath(modulePath: string): ParsedModulePath {
  const moduleParts = modulePath.split('/');
  if (modulePath.startsWith('@')) {
    return {
      name: `${moduleParts[0]}/${moduleParts[1]}`,
      path: moduleParts.slice(2).join('/')
    };
  } else {
    return {
      name: moduleParts[0],
      path: moduleParts.slice(1).join('/')
    };
  }
}
