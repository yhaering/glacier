import { makeReadDirFn } from './makeReadDirFn';
import fs from 'fs';

function run() {
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
});
