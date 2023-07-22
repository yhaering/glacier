import { makeReadFileFn } from './makeReadFileFn';
import fs from 'fs';

jest.mock('fs');

function run() {
  jest.spyOn(fs, 'readFileSync').mockReturnValue('{{BUFFER}}' as any);
  const fn = makeReadFileFn();
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeReadFileFn', () => {
  beforeEach(run);

  test('exports a function called makeReadFileFn', () => {
    expect(makeReadFileFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls fs.readFileSync', () => {
    expect(fs.readFileSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns return value of readFileSync', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual('{{BUFFER}}');
  });
});
