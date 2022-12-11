import { resolveFile } from './resolveFile';
import { hasExtension } from '../../fs/hasExtension';
import { resolveFileWithExtension } from './resolveFileWithExtension';
import { resolveFileWithoutExtension } from './resolveFileWithoutExtension';

jest.mock('./resolveFileWithoutExtension', () => ({
  resolveFileWithoutExtension: jest
    .fn()
    .mockReturnValue('{{WITHOUT_EXTENSION}}')
}));
jest.mock('../../fs/hasExtension', () => ({
  hasExtension: jest.fn().mockReturnValue(true)
}));

jest.mock('./resolveFileWithExtension', () => ({
  resolveFileWithExtension: jest.fn().mockReturnValue('{{WITH_EXTENSION}}')
}));
describe('resolveFile', () => {
  beforeEach(() => {
    resolveFile('{{FILE_PATH}}', ['{{EXTENSION}}']);
  });

  test('exports a function called resolveFile', () => {
    expect(resolveFile).toBeInstanceOf(Function);
  });

  test('calls hasExtension if file path', () => {
    expect(hasExtension).toHaveBeenCalledWith('{{FILE_PATH}}');
  });

  test('if file path has extension call resolveFileWithExtension', () => {
    const resolvedPath = resolveFile('{{FILE_PATH}}', ['{{EXTENSION}}']);
    expect(resolveFileWithExtension).toHaveBeenCalledWith('{{FILE_PATH}}');
    expect(resolvedPath).toBe('{{WITH_EXTENSION}}');
  });

  test('if file path has extension call resolveFileWithExtension', () => {
    (hasExtension as jest.Mock).mockReturnValueOnce(false);

    const resolvedPath = resolveFile('{{FILE_PATH}}', ['{{EXTENSION}}']);
    expect(resolveFileWithoutExtension).toHaveBeenCalledWith('{{FILE_PATH}}', [
      '{{EXTENSION}}'
    ]);
    expect(resolvedPath).toBe('{{WITHOUT_EXTENSION}}');
  });
});
