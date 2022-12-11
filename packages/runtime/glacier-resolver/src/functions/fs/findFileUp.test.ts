import { findFileUp } from './findFileUp';
import { findFile } from './findFile';
import { isRootPath } from './isRootPath';
import path from 'path';

jest.mock('./findFile');
jest.mock('./isRootPath');
jest.mock('path');

describe('findFileUp', () => {
  beforeEach(() => {
    (path.resolve as jest.Mock).mockReturnValue('{{PARENT_DIR}}');
    (isRootPath as jest.Mock).mockReturnValue(false);
    (findFile as jest.Mock)
      .mockReset()
      .mockReturnValueOnce(undefined)
      .mockReturnValueOnce('{{FILEPATH}}');
    findFileUp('{{CWD}}', '{{FILENAME}}', ['{{EXTENSION}}']);
  });

  test('exports a function called findFileUp', () => {
    expect(findFileUp).toBeInstanceOf(Function);
  });

  test('calls findFile', () => {
    expect(findFile).toHaveBeenCalledWith('{{CWD}}', '{{FILENAME}}', [
      '{{EXTENSION}}'
    ]);
  });

  test('returns file path if findFile is not undefined', () => {
    (findFile as jest.Mock)
      .mockReset()
      .mockReturnValueOnce(undefined)
      .mockReturnValueOnce('{{FILEPATH}}');
    const filePath = findFileUp('{{CWD}}', '{{FILENAME}}', ['{{EXTENSION}}']);
    expect(filePath).toBe('{{FILEPATH}}');
  });

  test('calls isRootPath with current dirPath', () => {
    expect(isRootPath).toHaveBeenCalledWith('{{CWD}}');
  });

  test('returns undefined if isRootPath returns true', () => {
    (isRootPath as jest.Mock).mockReturnValueOnce(true);
    const filePath = findFileUp('{{CWD}}', '{{FILENAME}}', ['{{EXTENSION}}']);
    expect(filePath).toBeUndefined();
  });

  test('if findFile returns undefined and isRootPath return false, get parent directory', () => {
    expect(path.resolve).toHaveBeenCalledWith('{{CWD}}', '../');
  });

  test('calls findFileUp with parent directory', () => {
    expect(findFile).toHaveBeenCalledWith('{{PARENT_DIR}}', '{{FILENAME}}', [
      '{{EXTENSION}}'
    ]);
  });
});
