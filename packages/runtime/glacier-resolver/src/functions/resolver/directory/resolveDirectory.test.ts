import { resolveDirectory } from './resolveDirectory';
import { findFile } from '../../fs/findFile';
import path from 'path';
import fs from 'fs';
import { resolveModuleFields } from '../module/resolveModuleFields';
import { createResolveConfigMock } from '../../../../test/mocks/createResolveConfigMock';

jest.mock('../module/resolveModuleFields');
jest.mock('path');
jest.mock('fs');
jest.mock('../../fs/findFile', () => ({
  findFile: jest.fn().mockReturnValue('{{FIND_FILE}}')
}));

describe('resolveDirectory', () => {
  beforeEach(() => {
    (path.resolve as jest.Mock).mockReturnValue('{{CONFIG_PATH}}');
    const config = createResolveConfigMock();
    resolveDirectory('{{DIR_PATH}}', config);
  });

  test('exports a function called resolveDirectory', () => {
    expect(resolveDirectory).toBeInstanceOf(Function);
  });

  test('build package json path', () => {
    expect(path.resolve).toHaveBeenCalledWith('{{DIR_PATH}}', 'package.json');
  });

  test('checks if package json exists', () => {
    expect(fs.existsSync).toHaveBeenCalledWith('{{CONFIG_PATH}}');
  });

  test('if package json exists, call resolveModuleFields', () => {
    const config = createResolveConfigMock();
    (fs.existsSync as jest.Mock).mockReturnValueOnce(true);
    resolveDirectory('{{DIR_PATH}}', config);
    expect(resolveModuleFields).toHaveBeenCalledWith('{{CONFIG_PATH}}', config);
  });

  test('if package json resolves the file, return it', () => {
    const config = createResolveConfigMock();
    (fs.existsSync as jest.Mock).mockReturnValueOnce(true);
    (resolveModuleFields as jest.Mock).mockReturnValue('{{RESOLVED_PATH}}');
    const resolvedPath = resolveDirectory('{{DIR_PATH}}', config);
    expect(resolvedPath).toBe('{{RESOLVED_PATH}}');
  });

  test('calls findFile', () => {
    expect(findFile).toHaveBeenCalledWith('{{DIR_PATH}}', 'index', [
      '{{EXTENSION}}'
    ]);
  });

  test('returns outcome of findFile', () => {
    const config = createResolveConfigMock();
    const filePath = resolveDirectory('{{DIR_PATH}}', config);
    expect(filePath).toBe('{{FIND_FILE}}');
  });
});
