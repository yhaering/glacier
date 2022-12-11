import { findFile } from '../../fs/findFile';
import path from 'path';
import fs from 'fs';
import type { ResolveConfig } from '../../../types/ResolveConfig';
import { resolveModuleFields } from '../module/resolveModuleFields';

export function resolveDirectory(
  dirPath: string,
  config: ResolveConfig
): string | undefined {
  const configPath = path.resolve(dirPath, 'package.json');
  if (fs.existsSync(configPath)) {
    const resolvedPath = resolveModuleFields(configPath, config);
    if (resolvedPath) {
      return resolvedPath;
    }
  }
  return findFile(dirPath, 'index', config.extensions);
}
