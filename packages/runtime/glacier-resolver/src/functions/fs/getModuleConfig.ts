import fs from 'fs';
import type { PackageJson } from '../../types/PackageJson';

export function getModuleConfig(filePath: string): PackageJson {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent) as PackageJson;
}
