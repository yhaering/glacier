import { isRootPath } from './isRootPath';
import { getRootPath } from './getRootPath';

jest.mock('./getRootPath', () => ({
  getRootPath: jest.fn().mockReturnValue('{{ROOT}}')
}));

describe('isRootPath', () => {
  beforeEach(() => {
    isRootPath('{{PATH}}');
  });

  test('exports a function called isRootPath', () => {
    expect(isRootPath).toBeInstanceOf(Function);
  });

  test('calls getRootPath', () => {
    expect(getRootPath).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns true if given path equals root path', () => {
    expect(isRootPath('{{ROOT}}')).toBe(true);
  });

  test('returns false if given path does not equal root path', () => {
    expect(isRootPath('{{OTHER}}')).toBe(false);
  });
});
