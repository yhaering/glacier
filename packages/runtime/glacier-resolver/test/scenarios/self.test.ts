import { defaultVolume } from '../volumes/defaultVolume';
import { resolve } from '../../src/resolve';
import type { ResolveConfig } from '../../src/types/ResolveConfig';

const config: ResolveConfig = {
  fs: defaultVolume,
  conditions: ['node', 'import'],
  mainFields: ['main'],
  extensions: ['.js', '.ts']
};

describe('self', () => {
  it('should resolve self', () => {
    const resolvedPath = resolve('/src/a.ts', 'self', config);
    expect(resolvedPath).toBe('/a.ts');
  });

  it('should resolve self with extension', () => {
    const resolvedPath = resolve('/src/a.ts', 'self/b.ts', config);
    expect(resolvedPath).toBe('/b.ts');
  });

  it('should resolve self in nested dependency', () => {
    const resolvedPath = resolve(
      '/node_modules/preact/node_modules/react/index.js',
      'react',
      config
    );
    expect(resolvedPath).toBe(
      '/node_modules/preact/node_modules/react/index.js'
    );
  });
});
