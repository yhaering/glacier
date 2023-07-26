import type { ParsedPath } from '../../src/interfaces/ParsedPath';

export function fakeParsedPath(): ParsedPath {
  return {
    base: 'test.txt',
    dir: '/a/b/c',
    root: '/',
    ext: '.txt',
    name: 'test'
  };
}
