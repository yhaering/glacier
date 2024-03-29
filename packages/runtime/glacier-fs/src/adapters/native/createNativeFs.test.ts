import { createNativeFs } from './createNativeFs';
import { makeWriteFileFn } from './factories/makeWriteFileFn';
import { makeCreateDirFn } from './factories/makeCreateDirFn';
import { makeExistsFn } from './factories/makeExistsFn';
import { makeIsDirectoryFn } from './factories/makeIsDirectoryFn';
import { makeIsFileFn } from './factories/makeIsFileFn';
import { makeReadDirFn } from './factories/makeReadDirFn';
import { makeReadFileFn } from './factories/makeReadFileFn';
import { makeRemoveFn } from './factories/makeRemoveFn';
import { makeResolveFn } from './factories/makeResolveFn';
import { makeRelativeFn } from './factories/makeRelativeFn';
import { makeParseFn } from './factories/makeParseFn';
import { makeFormatFn } from './factories/makeFormatFn';

jest.mock('./factories/makeWriteFileFn', () => ({
  makeWriteFileFn: jest.fn().mockReturnValue('{{makeWriteFileFn}}')
}));
jest.mock('./factories/makeCreateDirFn', () => ({
  makeCreateDirFn: jest.fn().mockReturnValue('{{makeCreateDirFn}}')
}));
jest.mock('./factories/makeExistsFn', () => ({
  makeExistsFn: jest.fn().mockReturnValue('{{makeExistsFn}}')
}));
jest.mock('./factories/makeIsDirectoryFn', () => ({
  makeIsDirectoryFn: jest.fn().mockReturnValue('{{makeIsDirectoryFn}}')
}));
jest.mock('./factories/makeIsFileFn', () => ({
  makeIsFileFn: jest.fn().mockReturnValue('{{makeIsFileFn}}')
}));
jest.mock('./factories/makeReadDirFn', () => ({
  makeReadDirFn: jest.fn().mockReturnValue('{{makeReadDirFn}}')
}));
jest.mock('./factories/makeReadFileFn', () => ({
  makeReadFileFn: jest.fn().mockReturnValue('{{makeReadFileFn}}')
}));
jest.mock('./factories/makeRemoveFn', () => ({
  makeRemoveFn: jest.fn().mockReturnValue('{{makeRemoveFn}}')
}));
jest.mock('./factories/makeResolveFn', () => ({
  makeResolveFn: jest.fn().mockReturnValue('{{makeResolveFn}}')
}));
jest.mock('./factories/makeRelativeFn', () => ({
  makeRelativeFn: jest.fn().mockReturnValue('{{makeRelativeFn}}')
}));
jest.mock('./factories/makeParseFn', () => ({
  makeParseFn: jest.fn().mockReturnValue('{{makeParseFn}}')
}));
jest.mock('./factories/makeFormatFn', () => ({
  makeFormatFn: jest.fn().mockReturnValue('{{makeFormatFn}}')
}));

function run() {
  const returnValue = createNativeFs();
  return { returnValue };
}

describe('createNativeFs', () => {
  beforeEach(run);

  test('exports a function called createNativeFs', () => {
    expect(createNativeFs).toBeInstanceOf(Function);
  });

  test('calls factory functions', () => {
    expect(makeWriteFileFn).toHaveBeenCalledWith();
    expect(makeCreateDirFn).toHaveBeenCalledWith();
    expect(makeExistsFn).toHaveBeenCalledWith();
    expect(makeIsDirectoryFn).toHaveBeenCalledWith();
    expect(makeIsFileFn).toHaveBeenCalledWith();
    expect(makeReadDirFn).toHaveBeenCalledWith();
    expect(makeReadFileFn).toHaveBeenCalledWith();
    expect(makeRemoveFn).toHaveBeenCalledWith();
    expect(makeResolveFn).toHaveBeenCalledWith();
    expect(makeRelativeFn).toHaveBeenCalledWith();
    expect(makeParseFn).toHaveBeenCalledWith();
    expect(makeFormatFn).toHaveBeenCalledWith();
  });

  test('returns a FileSystem', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      createDir: '{{makeCreateDirFn}}',
      exists: '{{makeExistsFn}}',
      isDirectory: '{{makeIsDirectoryFn}}',
      isFile: '{{makeIsFileFn}}',
      readDir: '{{makeReadDirFn}}',
      readFile: '{{makeReadFileFn}}',
      remove: '{{makeRemoveFn}}',
      writeFile: '{{makeWriteFileFn}}',
      resolve: '{{makeResolveFn}}',
      relative: '{{makeRelativeFn}}',
      parse: '{{makeParseFn}}',
      format: '{{makeFormatFn}}'
    });
  });
});
