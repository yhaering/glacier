/**
 * Tries to find a matching alias
 * @param modulePath The module import path
 * @param aliasMap The map of aliases
 */
export function findAlias(modulePath: string, aliasMap: Record<string, string>): string | undefined {
  for (const aliasName in aliasMap) {
    if (aliasName.endsWith('$')) {
      if (modulePath === aliasName.slice(0, -1)) {
        return aliasName;
      }
    } else {
      const moduleName = modulePath.split('/')[0];
      if (moduleName === aliasName) {
        return aliasName;
      }
    }
  }
}
