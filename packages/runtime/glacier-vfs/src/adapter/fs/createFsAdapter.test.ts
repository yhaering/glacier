import { createFsAdapter } from './createFsAdapter';

jest.mock('./dirs/createCreateDir', () => ({
  createCreateDir: jest.fn().mockReturnValue('{{createCreateDir}}')
}));
jest.mock('./files/createDeleteFile', () => ({
  createDeleteFile: jest.fn().mockReturnValue('{{createDeleteFile}}')
}));
jest.mock('./dirs/createDeleteDir', () => ({
  createDeleteDir: jest.fn().mockReturnValue('{{createDeleteDir}}')
}));
jest.mock('./files/createGetFileSize', () => ({
  createGetFileSize: jest.fn().mockReturnValue('{{createGetFileSize}}')
}));
jest.mock('./files/createHasFile', () => ({
  createHasFile: jest.fn().mockReturnValue('{{createHasFile}}')
}));
jest.mock('./dirs/createHasDir', () => ({
  createHasDir: jest.fn().mockReturnValue('{{createHasDir}}')
}));
jest.mock('./files/createIsFile', () => ({
  createIsFile: jest.fn().mockReturnValue('{{createIsFile}}')
}));
jest.mock('./dirs/createIsDir', () => ({
  createIsDir: jest.fn().mockReturnValue('{{createIsDir}}')
}));
jest.mock('./files/createReadFile', () => ({
  createReadFile: jest.fn().mockReturnValue('{{createReadFile}}')
}));
jest.mock('./files/createWriteFile', () => ({
  createWriteFile: jest.fn().mockReturnValue('{{createWriteFile}}')
}));

function run() {
  return createFsAdapter();
}

describe('createFsAdapter', () => {
  beforeEach(run);

  test('exports a function called createFsAdapter', () => {
    expect(createFsAdapter).toBeInstanceOf(Function);
  });

  test('returns VirtualFileSystem', () => {
    const returnValue = run();
    expect(returnValue).toEqual({
      createDir: '{{createCreateDir}}',
      deleteFile: '{{createDeleteFile}}',
      deleteDir: '{{createDeleteDir}}',
      getFileSize: '{{createGetFileSize}}',
      hasFile: '{{createHasFile}}',
      hasDir: '{{createHasDir}}',
      isFile: '{{createIsFile}}',
      isDir: '{{createIsDir}}',
      readFile: '{{createReadFile}}',
      writeFile: '{{createWriteFile}}'
    });
  });
});
