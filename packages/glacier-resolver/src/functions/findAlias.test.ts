import { findAlias } from './findAlias';

describe('findAlias', () => {
  it('should return undefined if no alias are present', () => {
    const alias = {};
    expect(findAlias('xyz', alias)).toBeUndefined();
  });

  it('should return undefined if no alias matches', () => {
    const alias = { xyz: 'abc' };
    expect(findAlias('xyz2', alias)).toBeUndefined();
  });

  it('should return undefined if alias matches but is not exact', () => {
    const alias = { xyz$: 'abc' };
    expect(findAlias('xyz2', alias)).toBeUndefined();
    expect(findAlias('xyz/index.js', alias)).toBeUndefined();
    expect(findAlias('xyz/dist', alias)).toBeUndefined();
  });

  it('should return alias name if it matches', () => {
    const alias = { xyz: 'abc' };
    expect(findAlias('xyz', alias)).toBe('xyz');
  });

  it('should return alias name if it matches loosely', () => {
    const alias = { xyz: 'abc' };
    expect(findAlias('xyz/test.js', alias)).toBe('xyz');
  });

  it('should return alias name if it matches exactly', () => {
    const alias = { xyz$: 'abc' };
    expect(findAlias('xyz', alias)).toBe('xyz$');
  });
});
