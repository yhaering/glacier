import { resolve } from '../../src/resolve';
import { defaultVolume } from '../volumes/defaultVolume';
import type { ResolveConfig } from '../../src/types/ResolveConfig';

const config: ResolveConfig = {
  fs: defaultVolume,
  conditions: ['node', 'import'],
  mainFields: ['main']
};

describe('exports', () => {
  it('should resolve default export', () => {
    const resolvedPath = resolve('/src/a.ts', 'c', config);
    expect(resolvedPath).toBe('/node_modules/c/index.ts');
  });

  it('should resolve default export with dot', () => {
    const resolvedPath = resolve('/src/a.ts', 'd', config);
    expect(resolvedPath).toBe('/node_modules/d/index.ts');
  });

  it('should resolve default export with default condition', () => {
    const resolvedPath = resolve('/src/a.ts', 'e', config);
    expect(resolvedPath).toBe('/node_modules/e/index.ts');
  });

  it('should resolve file export', () => {
    const resolvedPath = resolve('/src/a.ts', 'd/a.ts', config);
    expect(resolvedPath).toBe('/node_modules/d/cjs.ts');
  });

  it('should throw an error when accessing an internal path', () => {
    expect(() => {
      resolve('/src/a.ts', 'e/internal.ts', config);
    }).toThrowError('Package Path Not Exported');
  });

  it('should resolve conditioned exports', () => {
    const resolvedPath = resolve('/src/a.ts', 'f', config);
    expect(resolvedPath).toBe('/node_modules/f/node.ts');
  });

  it('should resolve deep conditioned exports', () => {
    const resolvedPath = resolve('/src/a.ts', 'g', config);
    expect(resolvedPath).toBe('/node_modules/g/node.ts');
  });

  it('should fallback to default', () => {
    const resolvedPath = resolve('/src/a.ts', 'h', config);
    expect(resolvedPath).toBe('/node_modules/h/index.ts');
  });
});
