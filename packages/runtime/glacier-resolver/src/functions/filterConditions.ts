import type { ResolverConfig } from '../interfaces/ResolverConfig';

export function filterConditions(
  conditions: string[],
  config: ResolverConfig
): string[] {
  return conditions.filter((condition) => {
    return condition === 'default' || config.conditions.includes(condition);
  });
}
