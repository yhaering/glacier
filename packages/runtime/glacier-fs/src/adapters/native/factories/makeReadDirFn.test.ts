import { makeReadDirFn } from './makeReadDirFn';
import fs from 'fs';

jest.mock('fs');

function run() {
  jest.spyOn(fs, 'readdirSync').mockReturnValue(['{{FILE}}'] as any);
  const fn = makeReadDirFn();
  const returnValue = fn('{{PATH}}');
  return { returnValue, fn };
}

describe('makeReadDirFn', () => {
  beforeEach(run);

  test('exports a function called makeReadDirFn', () => {
    expect(makeReadDirFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls fs.readdirSync', () => {
    expect(fs.readdirSync).toHaveBeenCalledWith('{{PATH}}');
  });

  test('returns Set of entries', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual(new Set(['{{FILE}}']));
  });
});
