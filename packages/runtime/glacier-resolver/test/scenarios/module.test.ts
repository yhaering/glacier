import { resolve } from '../../src/resolve';
import { defaultVolume } from '../volumes/defaultVolume';
import type { ResolveConfig } from '../../src/types/ResolveConfig';

const config: ResolveConfig = {
  fs: defaultVolume,
  conditions: ['node', 'import'],
  mainFields: ['main', 'module'],
  extensions: ['.js', '.ts']
};

describe('modules', () => {
  it('should resolve modules main field', () => {
    const resolvedPath = resolve('/index.js', 'a', config);
    expect(resolvedPath).toBe('/node_modules/a/index.js');
  });

  it('should resolve modules module field', () => {
    const resolvedPath = resolve('/index.js', 'x', config);
    expect(resolvedPath).toBe('/node_modules/x/index.mjs');
  });

  it('should resolve modules main field in parent directory', () => {
    const resolvedPath = resolve('/src/a/b/index.js', 'a', config);
    expect(resolvedPath).toBe('/node_modules/a/index.js');
  });

  it('should resolve module with path and extension', () => {
    const resolvedPath = resolve('/src/a/b/index.js', 'a/test.js', config);
    expect(resolvedPath).toBe('/node_modules/a/test.js');
  });

  it('should resolve module with path but no extension', () => {
    const resolvedPath = resolve('/src/a/b/index.js', 'a/test', config);
    expect(resolvedPath).toBe('/node_modules/a/test.js');
  });

  it('should throw an error if module does no exist', () => {
    expect(() => {
      resolve('/src/a/b/index.js', 'XXX', config);
    }).toThrowError('Module Not Found');
  });

  it('should prefer local node_modules folder over parent', () => {
    const resolvedPath = resolve(
      '/node_modules/preact/index.js',
      'react',
      config
    );
    expect(resolvedPath).toBe(
      '/node_modules/preact/node_modules/react/index.js'
    );
  });
});
