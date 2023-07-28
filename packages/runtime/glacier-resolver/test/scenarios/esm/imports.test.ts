import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('ESM Imports', () => {
  it('should resolve imports as string', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      dist: {
        'index.js': ''
      },
      'package.json': JSON.stringify({
        imports: {
          '#test': './dist/index.js'
        }
      })
    });
    const resolvedPath = resolver('#test', '/');
    expect(resolvedPath).toBe('/dist/index.js');
  });

  it('should resolve imports with default condition', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      dist: {
        'index.js': ''
      },
      'package.json': JSON.stringify({
        imports: {
          '#test': {
            default: './dist/index.js'
          }
        }
      })
    });
    const resolvedPath = resolver('#test', '/');
    expect(resolvedPath).toBe('/dist/index.js');
  });

  it('should resolve imports with condition', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      dist: {
        'index.js': ''
      },
      'package.json': JSON.stringify({
        imports: {
          '#test': {
            node: './dist/index.js'
          }
        }
      })
    });
    const resolvedPath = resolver('#test', '/');
    expect(resolvedPath).toBe('/dist/index.js');
  });

  it('should resolve imports with nested condition', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      dist: {
        'index.js': ''
      },
      'package.json': JSON.stringify({
        imports: {
          '#test': {
            node: {
              require: './dist/index.js'
            }
          }
        }
      })
    });
    const resolvedPath = resolver('#test', '/');
    expect(resolvedPath).toBe('/dist/index.js');
  });

  it('should resolve imports with wildcard condition', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      dist: {
        'index.js': ''
      },
      'package.json': JSON.stringify({
        imports: {
          '#test/*.js': './dist/*.js'
        }
      })
    });
    const resolvedPath = resolver('#test/index.js', '/');
    expect(resolvedPath).toBe('/dist/index.js');
  });
});
