import { findModule } from './findModule';
import path from 'path';
import fs from 'fs';
import { isRootPath } from '../../../fs/isRootPath';

jest.mock('fs');
jest.mock('path');
jest.mock('../../../fs/isRootPath');

describe('findModule', () => {
  beforeEach(() => {
    (path.resolve as jest.Mock).mockReturnValue('{{RESOLVED_PATH}}');
    (fs.existsSync as jest.Mock)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);
    findModule('{{DIR_PATH}}', '{{MODULE_NAME}}');
  });

  test('exports a function called findModule', () => {
    expect(findModule).toBeInstanceOf(Function);
  });

  test('build module path', () => {
    expect(path.resolve).toHaveBeenCalledWith(
      '{{DIR_PATH}}',
      'node_modules',
      '{{MODULE_NAME}}'
    );
  });

  test('check if directory exists', () => {
    expect(fs.existsSync).toHaveBeenCalledWith('{{RESOLVED_PATH}}');
  });

  test('returns resolved path if module exists', () => {
    (fs.existsSync as jest.Mock)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);
    const resolvedPath = findModule('{{DIR_PATH}}', '{{MODULE_NAME}}');
    expect(resolvedPath).toBe('{{RESOLVED_PATH}}');
  });

  test('check if the root has been reached', () => {
    expect(isRootPath).toHaveBeenCalledWith('{{DIR_PATH}}');
  });

  test('return undefined if the root has been reached', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    (isRootPath as jest.Mock).mockReturnValue(true);
    const resolvedPath = findModule('{{DIR_PATH}}', '{{MODULE_NAME}}');
    expect(resolvedPath).toBeUndefined();
  });
});
