import { PackageJson } from '../interfaces/PackageJson';
import { ResolverConfig } from '../interfaces/ResolverConfig';

export function resolveFields(
  pjson: PackageJson,
  { mainFields }: ResolverConfig
) {
  for (const field of mainFields) {
    if (Object.prototype.hasOwnProperty.call(pjson, field)) {
      return field;
    }
  }
}
