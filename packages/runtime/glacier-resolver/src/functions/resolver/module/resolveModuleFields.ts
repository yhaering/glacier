import { resolve } from '../../../resolve';
import type { ResolveConfig } from '../../../types/ResolveConfig';
import { getModuleConfig } from '../../fs/getModuleConfig';

export function resolveModuleFields(
  configPath: string,
  config: ResolveConfig
): string | undefined {
  const moduleConfig = getModuleConfig(configPath);
  for (const field of config.fields) {
    const importPath = moduleConfig[field] as string;
    if (importPath) {
      const resolvedPath = resolve(configPath, importPath, config);
      if (resolvedPath) {
        return resolvedPath;
      }
    }
  }
}
