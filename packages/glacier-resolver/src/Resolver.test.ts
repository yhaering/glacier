import { Resolver } from './Resolver';
import mock from 'mock-fs';
import { resolve } from 'path';
import { ResolverConfig } from './ResolverConfig';

describe('Resolver', () => {
  let resolver: Resolver;

  beforeEach(() => {
    resolver = new Resolver({});
  });

  beforeAll(() => {
    mock(
      {
        '/a.js': '',
        '/a.scss': '',
        '/x.json': '',
        '/b.js': '',
        '/c.jsx': '',
        '/components/index.js': '',
        '/elements/index.jsx': '',
        '/empty': {},
        '/node_modules/@test/test/package.json': JSON.stringify({ name: '@test/test', main: 'dist/index.js' }),
        '/node_modules/@test/test/dist/index.js': '',
        '/node_modules/test/dist/index.js': '',
        '/node_modules/test/package.json': JSON.stringify({ name: 'test', main: 'dist/index.js' }),
      },
      { createCwd: false, createTmp: false },
    );
  });

  afterAll(() => {
    mock.restore();
  });

  it('should resolve relative paths to existing files', () => {
    testResolve('/a.js', './b.js', '/b.js');
    testResolve('/a.js', './elements/index.jsx', '/elements/index.jsx');
    testResolve('/elements/index.jsx', '../a.js', '/a.js');
  });

  it('should resolve relative paths to existing files without extensions', () => {
    testResolve('/a.js', './b', '/b.js');
    testResolve('/a.js', './c', '/c.jsx');
    testResolve('/elements/index.jsx', '../a', '/a.js');
  });

  it('should resolve relative index file', () => {
    testResolve('/a.js', './components', '/components/index.js');
    testResolve('/a.js', './elements', '/elements/index.jsx');
    testResolve('/a.js', './elements/index', '/elements/index.jsx');
  });

  it('should resolve files with custom extensions', () => {
    testResolve('/a.js', './a.scss', '/a.scss', {
      extensions: ['js', 'jsx', 'scss'],
    });
  });

  it('should throw an error if a file does not exist', () => {
    expect(() => {
      resolver.resolve('/a.js', './not-found.js');
    }).toThrow("Could not resolve './not-found.js' from '/a.js'");
  });

  it('should throw an error if an index file does not exist', () => {
    expect(() => {
      resolver.resolve('/a.js', './empty');
    }).toThrow("Could not resolve './empty' from '/a.js'");
  });

  it('should throw an error if a file with a matching extension could not be found', () => {
    expect(() => {
      resolver.resolve('/a.js', './x');
    }).toThrow("Could not resolve './x' from '/a.js'");
  });

  it('should resolve module by name', () => {
    testResolve('/a.js', 'test', '/node_modules/test/dist/index.js');
    testResolve('/a.js', '@test/test', '/node_modules/@test/test/dist/index.js');
  });

  it('should resolve module by path', () => {
    testResolve('/a.js', 'test/dist/index.js', '/node_modules/test/dist/index.js');
    testResolve('/a.js', '@test/test/dist/index.js', '/node_modules/@test/test/dist/index.js');
  });

  it('should resolve index module by module path', () => {
    testResolve('/a.js', '@test/test/dist', '/node_modules/@test/test/dist/index.js');
  });

  it('should resolve module without extension by module path', () => {
    testResolve('/a.js', '@test/test/dist/index', '/node_modules/@test/test/dist/index.js');
  });

  it('should apply alias to module', () => {
    testResolve('/a.js', 'test-alias', '/node_modules/test/dist/index.js', {
      alias: {
        'test-alias': 'test',
      },
    });
  });

  it('should apply alias to module path', () => {
    testResolve('/a.js', 'test-alias/dist/index', '/node_modules/test/dist/index.js', {
      alias: {
        'test-alias': 'test',
      },
    });
  });

  it('should throw an error if a module does not exist', () => {
    expect(() => {
      resolver.resolve('/a.js', 'not-found');
    }).toThrow("Could not resolve 'not-found' from '/a.js'");
  });

  it('should throw an error if a path inside a module does not exist', () => {
    expect(() => {
      resolver.resolve('/a.js', 'test/dist/test.js');
    }).toThrow("Could not resolve 'test/dist/test.js' from '/a.js'");
  });

  function testResolve(sourcePath: string, modulePath: string, expectedPath: string, config?: ResolverConfig) {
    const resolver = new Resolver(config || {});
    const resolvedModule = resolver.resolve(sourcePath, modulePath);
    expect(resolvedModule.toLowerCase()).toBe(resolve(expectedPath).toLowerCase());
  }
});
