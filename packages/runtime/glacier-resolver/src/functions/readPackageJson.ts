import type { PackageJson } from '../interfaces/PackageJson';
import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function readPackageJson(
  packageURL: string,
  { fs }: ResolverConfig
): PackageJson | undefined {
  const pjsonPath = fs.resolve(packageURL, 'package.json');
  if (!fs.exists(pjsonPath)) {
    return undefined;
  }
  const pjsonContent = fs.readFile(pjsonPath);
  return JSON.parse(pjsonContent.toString('utf8')) as PackageJson;
}
