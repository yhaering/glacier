import type { ResolverConfig } from '../../types';
import { mockFileSystem } from '@glacier/fs/test/mocks/mockFileSystem';
export function fakeResolverConfig(): ResolverConfig {
  return {
    mainFields: ['main'],
    conditions: ['node', 'require'],
    extensions: ['.js'],
    fs: mockFileSystem()
  };
}
