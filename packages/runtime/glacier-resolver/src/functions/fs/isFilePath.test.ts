import { isFilePath } from './isFilePath';
import { getRootPath } from './getRootPath';

jest.mock('./getRootPath', () => ({
  getRootPath: jest.fn().mockReturnValue('{{ROOT_PATH}}')
}));

describe('isFilePath', () => {
  test('exports a function called isFilePath', () => {
    expect(isFilePath).toBeInstanceOf(Function);
  });

  test('returns true if path starts with a dot', () => {
    expect(isFilePath('./test')).toBe(true);
  });

  test('returns true if path starts with two dots', () => {
    expect(isFilePath('../test'));
  });

  test('calls getRootPath if a path does not start with a dot', () => {
    isFilePath('/a');
    expect(getRootPath).toHaveBeenCalledWith('/a');
  });

  test('returns true if path starts with root path', () => {
    expect(isFilePath('{{ROOT_PATH}}test')).toBe(true);
  });

  test('otherwise return false', () => {
    expect(isFilePath('test')).toBe(false);
  });
});
