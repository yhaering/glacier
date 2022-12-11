import type { ResolveConfig } from '../../src/types/ResolveConfig';

export function createResolveConfigMock(): ResolveConfig {
  return {
    fields: ['{{FIELD}}'],
    extensions: ['{{EXTENSION}}']
  };
}
