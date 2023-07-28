import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('CJS Relative Paths', () => {
  it('should resolve a relative path inside the same directory', () => {
    const resolver = createDefaultResolver(['/index.js', '/test.js']);
    const resolvedPath = resolver('./test.js', '/');
    expect(resolvedPath).toBe('/test.js');
  });

  it('should resolve a relative path outside the same directory', () => {
    const resolver = createDefaultResolver(['/index.js', '/functions/test.js']);
    const resolvedPath = resolver('./functions/test.js', '/');
    expect(resolvedPath).toBe('/functions/test.js');
  });

  it('should resolve a relative path outside the same directory without extension', () => {
    const resolver = createDefaultResolver(['/index.js', '/functions/test.js']);
    const resolvedPath = resolver('./functions/test', '/');
    expect(resolvedPath).toBe('/functions/test.js');
  });

  it('should resolve a relative path inside the same directory without extension', () => {
    const resolver = createDefaultResolver(['/index.js', '/test.js']);
    const resolvedPath = resolver('./test', '/');
    expect(resolvedPath).toBe('/test.js');
  });
});
