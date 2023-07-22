import { makeIsFileFn } from './makeIsFileFn';
import fs from 'fs';

jest.mock('fs');

function run() {
  jest.spyOn(fs, 'statSync').mockReturnValue({
    isFile: jest.fn().mockReturnValue('{{IS_FILE}}')
  } as any);
  const fn = makeIsFileFn();
  const returnValue = fn('{{PATH}}');
  return { returnValue, fn };
}

describe('makeIsFileFn', () => {
  beforeEach(run);

  test('exports a function called makeIsFileFn', () => {
    expect(makeIsFileFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls fs.statSync', () => {
    expect(fs.statSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns return value of isFile', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{IS_FILE}}');
  });
});
