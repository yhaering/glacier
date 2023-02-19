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

  test('otherwise return false', () => {
    expect(isFilePath('test')).toBe(false);
  });
});
