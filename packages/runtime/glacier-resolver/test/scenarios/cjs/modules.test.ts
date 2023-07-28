import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('CJS Modules', () => {
  it('should resolve a module dependency without scope', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({ main: './dist/index.js' }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve a module dependency with scope', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        '@scope': {
          dep: {
            'package.json': JSON.stringify({ main: './dist/index.js' }),
            dist: {
              'index.js': ''
            }
          }
        }
      }
    });
    const resolvedPath = resolver('@scope/dep', '/');
    expect(resolvedPath).toBe('/node_modules/@scope/dep/dist/index.js');
  });

  it('should resolve a module dependency without extension', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({ main: './dist/index' }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve a module in parents node_modules folder', () => {
    const resolver = createDefaultResolver({
      a: {
        b: {
          c: {
            'index.js': ''
          }
        }
      },
      node_modules: {
        dep: {
          'package.json': JSON.stringify({ main: './dist/index' }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/a/b/c');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });
});
