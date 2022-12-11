import { getRootPath } from './getRootPath';
import path from 'path';

describe('getRootPath', () => {
  beforeEach(() => {
    jest
      .spyOn(path, 'parse')
      .mockReturnValue({ root: '{{ROOT}}' } as path.ParsedPath);
    getRootPath('{{PARENT_URL}}');
  });

  test('exports a function called getRootPath', () => {
    expect(getRootPath).toBeInstanceOf(Function);
  });

  test('parses the current working directory', () => {
    expect(path.parse).toHaveBeenCalledWith('{{PARENT_URL}}');
  });

  test('returns root property', () => {
    const root = getRootPath('{{PARENT_URL}}');
    expect(root).toBe('{{ROOT}}');
  });
});
