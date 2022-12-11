import { resolveFileWithoutExtension } from './resolveFileWithoutExtension';
import path from 'path';
import { findFile } from '../../fs/findFile';

jest.mock('path');
jest.mock('../../fs/findFile', () => ({
  findFile: jest.fn().mockReturnValue('{{FIND_FILE}}')
}));

describe('resolveFileWithoutExtension', () => {
  beforeEach(() => {
    (path.dirname as jest.Mock).mockReturnValue('{{DIR_NAME}}');
    (path.basename as jest.Mock).mockReturnValue('{{BASE_NAME}}');
    resolveFileWithoutExtension('{{FILE_PATH}}', ['{{EXTENSION}}']);
  });

  test('exports a function called resolveFileWithoutExtension', () => {
    expect(resolveFileWithoutExtension).toBeInstanceOf(Function);
  });

  test('get dirname from filepath', () => {
    expect(path.dirname).toHaveBeenCalledWith('{{FILE_PATH}}');
  });

  test('get basename from filepath', () => {
    expect(path.basename).toHaveBeenCalledWith('{{FILE_PATH}}');
  });

  test('call findFile', () => {
    expect(findFile).toHaveBeenCalledWith('{{DIR_NAME}}', '{{BASE_NAME}}', [
      '{{EXTENSION}}'
    ]);
  });

  test('returns return value of findFile', () => {
    const resolvedPath = resolveFileWithoutExtension('{{FILE_PATH}}', [
      '{{EXTENSION}}'
    ]);
    expect(resolvedPath).toBe('{{FIND_FILE}}');
  });
});
