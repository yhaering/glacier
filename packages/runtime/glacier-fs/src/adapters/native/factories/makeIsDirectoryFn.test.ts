import { makeIsDirectoryFn } from './makeIsDirectoryFn';
import fs from 'node:fs';

jest.mock('node:fs');

function run() {
  jest.spyOn(fs, 'statSync').mockReturnValue({
    isDirectory: jest.fn().mockReturnValue('{{IS_DIRECTORY}}')
  } as any);
  const fn = makeIsDirectoryFn();
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeIsDirectoryFn', () => {
  beforeEach(run);

  test('exports a function called makeIsDirectoryFn', () => {
    expect(makeIsDirectoryFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls fs.statSync', () => {
    expect(fs.statSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns return value of isDirectory', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{IS_DIRECTORY}}');
  });
});
