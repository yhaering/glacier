import { resolve } from '../../src/resolve';
import { defaultVolume } from '../volumes/defaultVolume';
import type { ResolveConfig } from '../../src/types/ResolveConfig';

const config: ResolveConfig = {
  fs: defaultVolume,
  conditions: ['node', 'import'],
  mainFields: ['main'],
  extensions: ['.js', '.ts']
};

describe('relative', () => {
  it('should resolve absolute paths', () => {
    const resolvedPath = resolve('/a.ts', '/b.ts', config);
    expect(resolvedPath).toBe('/b.ts');
  });

  it('should resolve absolute paths without extension', () => {
    const resolvedPath = resolve('/a.ts', '/b', config);
    expect(resolvedPath).toBe('/b.ts');
  });

  it('should resolve relative paths to parent directory', () => {
    const resolvedPath = resolve('/src/a.ts', '../b.ts', config);
    expect(resolvedPath).toBe('/b.ts');
  });

  it('should resolve relative paths to parent directory without extension', () => {
    const resolvedPath = resolve('/src/a.ts', '../b', config);
    expect(resolvedPath).toBe('/b.ts');
  });

  it('should resolve relative paths to current directory', () => {
    const resolvedPath = resolve('/src/a.ts', './b.ts', config);
    expect(resolvedPath).toBe('/src/b.ts');
  });

  it('should resolve relative paths to current directory without extension', () => {
    const resolvedPath = resolve('/src/a.ts', './b', config);
    expect(resolvedPath).toBe('/src/b.ts');
  });
});
