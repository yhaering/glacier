import { isFile } from './isFile';

describe('isFile', () => {
  it('should return true if path contains a file', () => {
    expect(isFile('./test/index.js')).toBe(true);
  });

  it('should return false if path does not contain a file', () => {
    expect(isFile('./test')).toBe(false);
  });
});
