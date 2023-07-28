import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('CJS Self', () => {
  it('should resolve self', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      dist: {
        'index.js': ''
      },
      'package.json': JSON.stringify({
        name: 'dep',
        exports: './dist/index.js'
      })
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/dist/index.js');
  });

  it('should resolve self subpath', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      dist: {
        'index.js': ''
      },
      'package.json': JSON.stringify({
        name: 'dep',
        exports: {
          './test': './dist/index.js'
        }
      })
    });
    const resolvedPath = resolver('dep/test', '/');
    expect(resolvedPath).toBe('/dist/index.js');
  });
});
