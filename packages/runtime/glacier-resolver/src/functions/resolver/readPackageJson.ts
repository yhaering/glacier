import path from 'path';
import type { Optional, PackageJson } from '@glacier/types';
import type { ResolveConfig } from '../../types/ResolveConfig';

export function readPackageJson(
  packageURL: string,
  config: ResolveConfig
): Optional<PackageJson> {
  const { fs } = config;
  const pJsonURL = path.resolve(packageURL, 'package.json');

  if (!fs.existsSync(pJsonURL)) {
    return;
  }

  const pJsonRaw = fs.readFileSync(pJsonURL, 'utf-8');
  return JSON.parse(pJsonRaw) as PackageJson;
}
