import { getRootPath } from './getRootPath';
import path from 'path';

describe('getRootPath', () => {
  beforeEach(() => {
    jest
      .spyOn(path, 'parse')
      .mockReturnValue({ root: '{{ROOT}}' } as path.ParsedPath);
    jest.spyOn(process, 'cwd').mockReturnValue('{{CWD}}');
    getRootPath();
  });

  test('exports a function called getRootPath', () => {
    expect(getRootPath).toBeInstanceOf(Function);
  });

  test('gets current working directory', () => {
    expect(process.cwd).toHaveBeenCalled();
  });

  test('parses the current working directory', () => {
    expect(path.parse).toHaveBeenCalledWith('{{CWD}}');
  });

  test('returns root property', () => {
    const root = getRootPath();
    expect(root).toBe('{{ROOT}}');
  });
});
