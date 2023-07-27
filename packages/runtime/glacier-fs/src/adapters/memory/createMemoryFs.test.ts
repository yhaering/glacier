import { createMemoryFs } from './createMemoryFs';
import { makeWriteFileFn } from './factories/makeWriteFileFn';
import { makeCreateDirFn } from './factories/makeCreateDirFn';
import { makeExistsFn } from './factories/makeExistsFn';
import { makeIsDirectoryFn } from './factories/makeIsDirectoryFn';
import { makeIsFileFn } from './factories/makeIsFileFn';
import { makeReadDirFn } from './factories/makeReadDirFn';
import { makeReadFileFn } from './factories/makeReadFileFn';
import { makeRemoveFn } from './factories/makeRemoveFn';
import { makeToJsonFn } from './factories/makeToJsonFn';
import { createMemoryVolume } from './functions/createMemoryVolume';
import { fakeJsonVolume } from '../../../test/fakes/fakeJsonVolume';
import { makeResolveFn } from './factories/makeResolveFn';
import { makeRelativeFn } from './factories/makeRelativeFn';
import { makeParseFn } from './factories/makeParseFn';
import { makeFormatFn } from './factories/makeFormatFn';

jest.mock('./functions/createMemoryVolume', () => ({
  createMemoryVolume: jest.fn().mockReturnValue('{{MEMORY_VOLUME}}')
}));
jest.mock('./factories/makeToJsonFn', () => ({
  makeToJsonFn: jest.fn().mockReturnValue('{{makeToJsonFn}}')
}));
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
  const returnValue = createMemoryFs();
  return { returnValue };
}

function runWithVolume() {
  const volume = fakeJsonVolume();
  const returnValue = createMemoryFs(volume);
  return { returnValue };
}

describe('createMemoryFs', () => {
  beforeEach(run);

  test('exports a function called createMemoryFs', () => {
    expect(createMemoryFs).toBeInstanceOf(Function);
  });

  test('calls createMemoryVolume', () => {
    expect(createMemoryVolume).toHaveBeenCalledWith(undefined);
  });

  test('calls factory functions', () => {
    const memoryVolume = createMemoryVolume();
    expect(makeToJsonFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeWriteFileFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeCreateDirFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeExistsFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeIsDirectoryFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeIsFileFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeReadDirFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeReadFileFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeRemoveFn).toHaveBeenCalledWith(memoryVolume);
    expect(makeResolveFn).toHaveBeenCalledWith();
    expect(makeRelativeFn).toHaveBeenCalledWith();
    expect(makeParseFn).toHaveBeenCalledWith();
    expect(makeFormatFn).toHaveBeenCalledWith();
  });

  test('returns a FileSystem', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      toJson: '{{makeToJsonFn}}',
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

  describe('if volume is defined', () => {
    beforeEach(runWithVolume);

    test('calls createMemoryVolume', () => {
      const jsonVolume = fakeJsonVolume();
      expect(createMemoryVolume).toHaveBeenCalledWith(jsonVolume);
    });
  });
});
