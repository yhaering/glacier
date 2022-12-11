import { createVFS } from '@glacier/vfs';

export const defaultVolume = createVFS({
  '/a.ts': '',
  '/b.ts': '',
  '/utils.ts': '',
  '/internal': {
    'test.ts': ''
  },
  '/src': {
    'a.ts': '',
    'b.ts': '',
    functions: {
      'index.ts': ''
    }
  },
  '/package.json': JSON.stringify({
    name: 'self',
    main: './a.ts',
    imports: {
      '#utils': './utils.ts',
      '#internal/*.ts': './internal/*.ts'
    },
    exports: {
      '.': './a.ts',
      './b.ts': './b.ts'
    }
  }),
  '/index.js': '',
  '/src/a/b/index.js': '',
  '/src/node_modules/b': {
    'index.js': '',
    'package.json': JSON.stringify({ main: './index.js' })
  },
  '/node_modules/a': {
    'index.js': '',
    'test.js': '',
    'package.json': JSON.stringify({
      main: './index.js'
    })
  },
  '/node_modules/c': {
    'index.ts': '',
    'package.json': JSON.stringify({
      exports: './index.ts'
    })
  },
  '/node_modules/d': {
    'index.ts': '',
    'cjs.ts': '',
    'package.json': JSON.stringify({
      exports: {
        '.': './index.ts',
        './a.ts': './cjs.ts'
      }
    })
  },
  '/node_modules/e': {
    'index.ts': '',
    'internal.ts': '',
    'package.json': JSON.stringify({
      exports: {
        default: './index.ts'
      }
    })
  },
  '/node_modules/f': {
    'index.ts': '',
    'node.ts': '',
    'package.json': JSON.stringify({
      exports: {
        node: './node.ts',
        default: './index.ts'
      }
    })
  },
  '/node_modules/g': {
    'index.ts': '',
    'node.ts': '',
    'package.json': JSON.stringify({
      exports: {
        node: {
          import: './node.ts'
        },
        default: './index.ts'
      }
    })
  },
  '/node_modules/h': {
    'index.ts': '',
    'node.ts': '',
    'package.json': JSON.stringify({
      exports: {
        node: {
          unk: './node.ts'
        },
        default: './index.ts'
      }
    })
  }
});
