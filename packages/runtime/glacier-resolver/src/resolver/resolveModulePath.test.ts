import { resolveModulePath } from './resolveModulePath';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { findFile } from '../functions/findFile';
import { resolveDirectory } from './resolveDirectory';

jest.mock('../functions/findFile', () => ({
  findFile: jest.fn().mockReturnValue('{{FILE_PATH}}')
}));

jest.mock('./resolveDirectory', () => ({
  resolveDirectory: jest.fn().mockReturnValue('{{RESOLVED_PATH}}')
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock).mockReturnValue(true);
  (resolverConfig.fs.isDirectory as jest.Mock).mockReturnValue(false);
  const returnValue = resolveModulePath('{{MODULE_PATH}}', resolverConfig);
  return { returnValue, resolverConfig };
}

function runWithMissingFile() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock).mockReturnValue(false);
  const returnValue = resolveModulePath('{{MODULE_PATH}}', resolverConfig);
  return { returnValue, resolverConfig };
}

function runWithDirectoryPath() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock).mockReturnValue(true);
  (resolverConfig.fs.isDirectory as jest.Mock).mockReturnValue(true);
  const returnValue = resolveModulePath('{{MODULE_PATH}}', resolverConfig);
  return { returnValue, resolverConfig };
}

describe('resolveModulePath', () => {
  beforeEach(run);

  test('exports a function called resolveModulePath', () => {
    expect(resolveModulePath).toBeInstanceOf(Function);
  });

  test('calls fs.exists', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.exists).toHaveBeenCalledWith('{{MODULE_PATH}}');
  });

  test('calls fs.isDirectory', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.isDirectory).toHaveBeenCalledWith(
      '{{MODULE_PATH}}'
    );
  });

  test('returns module path', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{MODULE_PATH}}');
  });

  describe('if module path does not exist', () => {
    beforeEach(runWithMissingFile);

    test('calls findFile', () => {
      const { resolverConfig } = runWithMissingFile();
      expect(findFile).toHaveBeenCalledWith('{{MODULE_PATH}}', resolverConfig);
    });

    test('return return value of findFile', () => {
      const { returnValue } = runWithMissingFile();
      expect(returnValue).toBe('{{FILE_PATH}}');
    });
  });

  describe('if module path is a directory', () => {
    beforeEach(runWithDirectoryPath);

    test('calls resolveDirectory', () => {
      const { resolverConfig } = runWithDirectoryPath();
      expect(resolveDirectory).toHaveBeenCalledWith(
        '{{MODULE_PATH}}',
        resolverConfig
      );
    });

    test('return return value of resolveDirectory', () => {
      const { returnValue } = runWithDirectoryPath();
      expect(returnValue).toBe('{{RESOLVED_PATH}}');
    });
  });
});
