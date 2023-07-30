import type { PackageJson } from '../interfaces/PackageJson';
import type { ResolverConfig } from '../interfaces/ResolverConfig';
import { isPropertyOf } from './checks/isPropertyOf';

export function resolveFields(
  pjson: PackageJson,
  { mainFields }: ResolverConfig
) {
  for (const field of mainFields) {
    if (isPropertyOf(pjson, field)) {
      return field;
    }
  }
}
