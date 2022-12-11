import { parseModulePath } from './functions/parseModulePath';
import path from 'path';
import { findModule } from './functions/findModule';

export function resolveModule(sourcePath: string, importPath: string): void {
  const parsedPath = parseModulePath(importPath);
  const sourceDir = path.dirname(sourcePath);
  const modulePath = findModule(sourceDir, parsedPath.name);
}

// react/index.js
