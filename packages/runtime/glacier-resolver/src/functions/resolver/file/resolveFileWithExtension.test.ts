import { resolveFileWithExtension } from './resolveFileWithExtension';
import fs from 'fs';

jest.mock('fs');
describe('resolveFileWithExtension', () => {
  beforeEach(() => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    resolveFileWithExtension('{{FILE_PATH}}');
  });

  test('exports a function called resolveFileWithExtension', () => {
    expect(resolveFileWithExtension).toBeInstanceOf(Function);
  });

  test('check if file exists', () => {
    expect(fs.existsSync).toHaveBeenCalledWith('{{FILE_PATH}}');
  });

  test('if file exists, return file path', () => {
    const resolvedPath = resolveFileWithExtension('{{FILE_PATH}}');
    expect(resolvedPath).toBe('{{FILE_PATH}}');
  });

  test('if file does not exist, return undefined', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    const resolvedPath = resolveFileWithExtension('{{FILE_PATH}}');
    expect(resolvedPath).toBeUndefined();
  });
});
