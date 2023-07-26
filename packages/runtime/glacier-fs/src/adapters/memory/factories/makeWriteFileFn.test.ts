import { makeWriteFileFn } from './makeWriteFileFn';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { makeCreateDirFn } from './makeCreateDirFn';
import { assertEntryPath } from '../assertions/assertEntryPath';
import path from 'node:path';
import { getEntry } from '../functions/getEntry';
import { assertMemoryDirectoryLike } from '../assertions/assertMemoryDirectoryLike';
import { createMemoryFile } from '../functions/createMemoryFile';
import type { MemoryDirectory } from '../interfaces/MemoryDirectory';

jest.mock('../functions/createMemoryFile', () => ({
  createMemoryFile: jest.fn().mockReturnValue('{{MEMORY_FILE}}')
}));

jest.mock('../assertions/assertMemoryDirectoryLike', () => ({
  assertMemoryDirectoryLike: jest.fn()
}));

jest.mock('../functions/getEntry', () => ({
  getEntry: jest.fn().mockReturnValue({
    entries: {
      set: jest.fn()
    }
  })
}));
jest.mock('./makeCreateDirFn', () => ({
  makeCreateDirFn: jest.fn().mockReturnValue(jest.fn())
}));

jest.mock('../assertions/assertEntryPath', () => ({
  assertEntryPath: jest.fn()
}));

jest.mock('node:path', () => ({
  parse: jest.fn().mockReturnValue({
    dir: '{{DIR}}',
    base: '{{BASE}}'
  })
}));

function run() {
  const volume = fakeMemoryVolume();
  const fn = makeWriteFileFn(volume);
  const buffer = Buffer.from('{{CONTENT}}');
  fn('{{PATH}}', buffer);
  return { fn, buffer };
}

describe('makeWriteFileFn', () => {
  beforeEach(run);

  test('exports a function called makeWriteFileFn', () => {
    expect(makeWriteFileFn).toBeInstanceOf(Function);
  });

  test('calls makeCreateDirFn', () => {
    const volume = fakeMemoryVolume();
    makeWriteFileFn(volume);
    expect(makeCreateDirFn).toHaveBeenCalledWith(volume);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls assertValidPath', () => {
    expect(assertEntryPath).toHaveBeenCalledWith('{{PATH}}');
  });

  test('calls path.parse', () => {
    expect(path.parse).toHaveBeenCalledWith('{{PATH}}');
  });

  test('calls createDir with dir', () => {
    const volume = fakeMemoryVolume();
    const createDir = makeCreateDirFn(volume);
    expect(createDir).toHaveBeenCalledWith('{{DIR}}');
  });

  test('calls getEntry', () => {
    const volume = fakeMemoryVolume();
    expect(getEntry).toHaveBeenCalledWith(volume, '{{DIR}}');
  });

  test('calls assertMemoryDirectoryLike', () => {
    expect(assertMemoryDirectoryLike).toHaveBeenCalledWith(
      '{{DIR}}',
      expect.any(Object)
    );
  });

  test('calls createMemoryFile', () => {
    const buffer = Buffer.from('{{CONTENT}}');
    expect(createMemoryFile).toHaveBeenCalledWith('{{BASE}}', buffer);
  });

  test('calls entries.set', () => {
    const volume = fakeMemoryVolume();
    const entry = getEntry(volume, '{{DIR}}') as MemoryDirectory;
    expect(entry.entries.set).toHaveBeenCalledWith(
      '{{BASE}}',
      '{{MEMORY_FILE}}'
    );
  });
});
