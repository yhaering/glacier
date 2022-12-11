import { compileDirectory } from './compileDirectory';
import { createVirtualFile } from './createVirtualFile';
import { createVirtualDirectory } from './createVirtualDirectory';
import { createJSONVolumeMock } from '../../test/mocks/createJSONVolumeMock';

jest.mock('./createVirtualDirectory', () => ({
  createVirtualDirectory: jest.fn().mockReturnValue('{{DIRECTORY}}')
}));
jest.mock('./createVirtualFile', () => ({
  createVirtualFile: jest.fn().mockReturnValue('{{FILE}}')
}));

describe('compileDirectory', () => {
  beforeEach(() => {
    const volume = new Map();
    const jsonVolume = createJSONVolumeMock();
    compileDirectory(jsonVolume, [], volume);
  });

  test('exports a function called compileDirectory', () => {
    expect(compileDirectory).toBeInstanceOf(Function);
  });

  test('calls createVirtualFile', () => {
    expect(createVirtualFile).toHaveBeenCalledWith('{{FILE_CONTENT}}');
    expect(createVirtualFile).toHaveBeenCalledWith('{{SUB_CONTENT}}');
  });

  test('calls createVirtualDirectory ', () => {
    expect(createVirtualDirectory());
  });

  test('returns the correct virtual volume', () => {
    const volume = new Map();
    const jsonVolume = createJSONVolumeMock();

    compileDirectory(jsonVolume, [], volume);
    expect(Object.fromEntries(volume)).toEqual({
      '/{{PATH_FILE}}': '{{FILE}}',
      '/{{PATH_DIR}}': '{{DIRECTORY}}',
      '/{{PATH_DIR}}/{{PATH_SUB}}': '{{FILE}}'
    });
  });
});
