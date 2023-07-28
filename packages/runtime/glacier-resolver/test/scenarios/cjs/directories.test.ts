import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('CJS Directories', () => {
  it('should resolve the index file of a directory', () => {
    const resolver = createDefaultResolver([
      '/index.js',
      '/functions/index.js'
    ]);
    const resolvedPath = resolver('./functions', '/');
    expect(resolvedPath).toBe('/functions/index.js');
  });
});
