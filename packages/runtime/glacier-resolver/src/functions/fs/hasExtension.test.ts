import { hasExtension } from './hasExtension';
import path from 'path';

jest.mock('path');
describe('hasExtension', () => {
  beforeEach(() => {
    (path.extname as jest.Mock).mockReturnValue('{{EXTENSION}}');
    hasExtension('{{FILE_PATH}}');
  });

  test('exports a function called hasExtension', () => {
    expect(hasExtension).toBeInstanceOf(Function);
  });

  test('calls path.extname on file path', () => {
    expect(path.extname).toHaveBeenCalledWith('{{FILE_PATH}}');
  });

  test('returns true if the extension is not an empty string', () => {
    expect(hasExtension('{{FILE_PATH}}')).toBe(true);
  });

  test('returns false if the extension is an empty string', () => {
    (path.extname as jest.Mock).mockReturnValueOnce('');

    expect(hasExtension('{{FILE_PATH}}')).toBe(false);
  });
});
