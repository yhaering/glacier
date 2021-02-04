import { isRelative } from './isRelative';

describe('isRelative', () => {
  it('should return true if the path is relative', () => {
    expect(isRelative('./module')).toBe(true);
  });

  it('should return false if the path is not relative', () => {
    expect(isRelative('module')).toBe(false);
  });
});
