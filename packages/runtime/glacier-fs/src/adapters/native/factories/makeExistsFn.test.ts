import { makeExistsFn } from './makeExistsFn';
import fs from 'node:fs';

jest.mock('node:fs');

function run() {
  jest.spyOn(fs, 'existsSync').mockReturnValue('{{EXISTS}}' as any);
  const fn = makeExistsFn();
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeExistsFn', () => {
  beforeEach(run);

  test('exports a function called makeExistsFn', () => {
    expect(makeExistsFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls fs.existsSync', () => {
    expect(fs.existsSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns return value of fs.existsSync', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{EXISTS}}');
  });
});
