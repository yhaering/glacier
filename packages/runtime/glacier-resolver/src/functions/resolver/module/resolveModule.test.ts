import { resolveModule } from './resolveModule';
import { parseModulePath } from './functions/parseModulePath';
import { findModule } from './functions/findModule';
import path from 'path';

jest.mock('path');
jest.mock('./functions/findModule');
jest.mock('./functions/parseModulePath');
describe('resolveModule', () => {
  beforeEach(() => {
    (path.dirname as jest.Mock).mockReturnValue('{{DIR_PATH}}');
    (findModule as jest.Mock).mockReturnValue('{{MODULE_PATH}}');
    (parseModulePath as jest.Mock).mockReturnValue({ name: '{{MODULE_NAME}}' });
    resolveModule('{{SOURCE_PATH}}', '{{IMPORT_PATH}}');
  });

  test('exports a function called resolveModule', () => {
    expect(resolveModule).toBeInstanceOf(Function);
  });

  test('parse module path', () => {
    expect(parseModulePath).toHaveBeenCalledWith('{{IMPORT_PATH}}');
  });

  test('get source directory', () => {
    expect(path.dirname).toHaveBeenCalledWith('{{SOURCE_PATH}}');
  });

  test('try to find the nearest module', () => {
    expect(findModule).toHaveBeenCalledWith('{{DIR_PATH}}', '{{MODULE_NAME}}');
  });
});
