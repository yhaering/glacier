import { findAlias } from './findAlias';

/**
 * Transforms the module path given a map of aliases.
 * @param modulePath The module import path
 * @param aliasMap The map of aliases
 */
export function resolveAlias(modulePath: string, aliasMap: Record<string, string>): string {
  const selectedAlias = findAlias(modulePath, aliasMap);
  if (!selectedAlias) return modulePath;
  const aliasPath = aliasMap[selectedAlias];
  if (selectedAlias.endsWith('$')) {
    return aliasPath;
  }

  const modulePaths = modulePath.split('/');
  const moduleFileName = modulePath.split('/').pop() as string;
  const aliasFileName = aliasPath.split('/').pop() as string;

  if (moduleFileName.indexOf('.') > -1 && aliasFileName.indexOf('.') > -1) {
    throw new Error(`Invalid import "${modulePath}" as alias for "${selectedAlias}" contains a file`);
  }

  modulePaths[0] = aliasPath;
  return modulePaths.join('/');
}
