import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('ESM Exports', () => {
  it('should resolve exports as string', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({ exports: './dist/index.js' }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should prefer exports over main as string', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: './dist/index.js',
            main: './dist/index.main.js'
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve exports with dot notation', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              '.': './dist/index.js'
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve multiple export definitions', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              '.': './dist/index.js',
              './mapped.js': './dist/mapped.js'
            }
          }),
          dist: {
            'index.js': '',
            'mapped.js': ''
          }
        }
      }
    });
    expect(resolver('dep', '/')).toBe('/node_modules/dep/dist/index.js');
    expect(resolver('dep/mapped.js', '/')).toBe(
      '/node_modules/dep/dist/mapped.js'
    );
  });

  it('should resolve deep export paths', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              '.': './dist/index.js',
              './fncs/mapped.js': './dist/mapped.js'
            }
          }),
          dist: {
            'index.js': '',
            'mapped.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep/fncs/mapped.js', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/mapped.js');
  });

  it('should resolve default condition on top level', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              default: './dist/index.js'
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve node condition on top level', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              node: './dist/index.js'
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve node over default condition on top level', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              node: './dist/index.js',
              default: './dits/default.js'
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve nested conditions', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              node: {
                require: './dist/index.js'
              }
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve sub path conditions', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              './fnc.js': {
                node: './dist/index.js'
              }
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep/fnc.js', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve sub path nested conditions', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              './fnc.js': {
                node: {
                  require: './dist/index.js'
                }
              }
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep/fnc.js', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve wildcards', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              './fnc/*.js': './dist/*.js'
            }
          }),
          dist: {
            'a.js': '',
            'b.js': ''
          }
        }
      }
    });
    expect(resolver('dep/fnc/a.js', '/')).toBe('/node_modules/dep/dist/a.js');
    expect(resolver('dep/fnc/b.js', '/')).toBe('/node_modules/dep/dist/b.js');
  });

  it('should resolve multiple wildcards', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              './fnc/*.js': './dist/*.js',
              './fnc/a/*': './dist/*.js'
            }
          }),
          dist: {
            'a.js': '',
            'b.js': ''
          }
        }
      }
    });
    expect(resolver('dep/fnc/a.js', '/')).toBe('/node_modules/dep/dist/a.js');
    expect(resolver('dep/fnc/b.js', '/')).toBe('/node_modules/dep/dist/b.js');
  });

  it('should resolve list of exports', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: ['./dist/bad.js', './dist/index.js']
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });

  it('should resolve list of exports on sublevel', () => {
    const resolver = createDefaultResolver({
      'index.js': '',
      node_modules: {
        dep: {
          'package.json': JSON.stringify({
            exports: {
              '.': ['./dist/bad.js', './dist/index.js']
            }
          }),
          dist: {
            'index.js': ''
          }
        }
      }
    });
    const resolvedPath = resolver('dep', '/');
    expect(resolvedPath).toBe('/node_modules/dep/dist/index.js');
  });
});
