import { createVFS } from './createVFS';
import { compileVolume } from './functions/compileVolume';
import { createExistsSync } from './fs/createExistsSync';
import { createReadFileSync } from './fs/createReadFileSync';
import { createLstatSync } from './fs/createLstatSync';

jest.mock('./functions/compileVolume', () => ({
  compileVolume: jest.fn().mockReturnValue('{{VOLUME}}')
}));

jest.mock('./fs/createExistsSync', () => ({
  createExistsSync: jest.fn().mockReturnValue('{{EXISTS_SYNC}}')
}));
jest.mock('./fs/createReadFileSync', () => ({
  createReadFileSync: jest.fn().mockReturnValue('{{READ_FILE_SYNC}}')
}));
jest.mock('./fs/createLstatSync', () => ({
  createLstatSync: jest.fn().mockReturnValue('{{LSTAT_SYNC}}')
}));

describe('createVFS', () => {
  beforeEach(() => {
    createVFS({});
  });

  test('exports a function called createVFS', () => {
    expect(createVFS).toBeInstanceOf(Function);
  });

  test('calls compileVolume', () => {
    expect(compileVolume).toHaveBeenCalledWith({});
  });

  test('calls createExistsSync with volume', () => {
    expect(createExistsSync).toHaveBeenCalledWith('{{VOLUME}}');
  });

  test('calls createExistsSync with volume', () => {
    expect(createReadFileSync).toHaveBeenCalledWith('{{VOLUME}}');
  });

  test('calls createExistsSync with volume', () => {
    expect(createLstatSync).toHaveBeenCalledWith('{{VOLUME}}');
  });

  test('returns a virtual file system', () => {
    const vfs = createVFS({});
    expect(vfs).toEqual({
      existsSync: '{{EXISTS_SYNC}}',
      readFileSync: '{{READ_FILE_SYNC}}',
      lstatSync: '{{LSTAT_SYNC}}'
    });
  });
});
