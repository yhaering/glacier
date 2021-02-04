import { resolveAlias } from './resolveAlias';

describe('resolveAlias', () => {
  it('should return original module path if no alias matches', () => {
    const alias = {};
    expect(resolveAlias('xyz', alias)).toBe('xyz');
    expect(resolveAlias('xyz/files.js', alias)).toBe('xyz/files.js');
  });

  it('should return absolute file path', () => {
    const alias = { xyz: '/abc/path/to/file.js' };
    expect(resolveAlias('xyz', alias)).toBe('/abc/path/to/file.js');
    expect(() => resolveAlias('xyz/files.js', alias)).toThrowError(
      'Invalid import "xyz/files.js" as alias for "xyz" contains a file',
    );
  });

  it('should limit alias to exact matches', () => {
    const alias = { xyz$: '/abc/path/to/file.js' };
    expect(resolveAlias('xyz', alias)).toBe('/abc/path/to/file.js');
    expect(resolveAlias('xyz/files.js', alias)).toBe('xyz/files.js');
  });

  it('should return relative file path', () => {
    const alias = { xyz: './dir/file.js' };
    expect(resolveAlias('xyz', alias)).toBe('./dir/file.js');
    expect(() => resolveAlias('xyz/files.js', alias)).toThrowError(
      'Invalid import "xyz/files.js" as alias for "xyz" contains a file',
    );
  });

  it('should return relative file path on exact match', () => {
    const alias = { xyz$: './dir/file.js' };
    expect(resolveAlias('xyz', alias)).toBe('./dir/file.js');
    expect(resolveAlias('xyz/files.js', alias)).toBe('xyz/files.js');
  });

  it('should return absolute directory patch', () => {
    const alias = { xyz: '/some/dir' };
    expect(resolveAlias('xyz', alias)).toBe('/some/dir');
    expect(resolveAlias('xyz/files.js', alias)).toBe('/some/dir/files.js');
  });

  it('should return absolute directory patch on exact match', () => {
    const alias = { xyz$: '/some/dir' };
    expect(resolveAlias('xyz', alias)).toBe('/some/dir');
    expect(resolveAlias('xyz/files.js', alias)).toBe('xyz/files.js');
  });

  it('should return relative directory patch', () => {
    const alias = { xyz: './dir' };
    expect(resolveAlias('xyz', alias)).toBe('./dir');
    expect(resolveAlias('xyz/files.js', alias)).toBe('./dir/files.js');
  });

  it('should return relative directory patch on exact match', () => {
    const alias = { xyz$: './dir' };
    expect(resolveAlias('xyz', alias)).toBe('./dir');
    expect(resolveAlias('xyz/files.js', alias)).toBe('xyz/files.js');
  });

  it('should return new module', () => {
    const alias = { xyz: 'module' };
    expect(resolveAlias('xyz', alias)).toBe('module');
    expect(resolveAlias('xyz/files.js', alias)).toBe('module/files.js');
  });

  it('should return new module on exact match', () => {
    const alias = { xyz$: 'module' };
    expect(resolveAlias('xyz', alias)).toBe('module');
    expect(resolveAlias('xyz/files.js', alias)).toBe('xyz/files.js');
  });

  it('should return new module file path', () => {
    const alias = { xyz: 'module/some/file.js' };
    expect(resolveAlias('xyz', alias)).toBe('module/some/file.js');
    expect(() => resolveAlias('xyz/files.js', alias)).toThrowError(
      'Invalid import "xyz/files.js" as alias for "xyz" contains a file',
    );
  });

  it('should return new module directory path', () => {
    const alias = { xyz: 'module/dir' };
    expect(resolveAlias('xyz', alias)).toBe('module/dir');
    expect(resolveAlias('xyz/files.js', alias)).toBe('module/dir/files.js');
  });

  it('should return new module directory path on exact match', () => {
    const alias = { xyz$: 'module/dir' };
    expect(resolveAlias('xyz', alias)).toBe('module/dir');
    expect(resolveAlias('xyz/files.js', alias)).toBe('xyz/files.js');
  });
});
