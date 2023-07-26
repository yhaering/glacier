import { makeRelativeFn } from './makeRelativeFn';
import path from 'node:path';

jest.mock('node:path');

function run() {
  const fn = makeRelativeFn();
  const returnValue = fn('{{FROM}}', '{{TO}}');
  return { fn, returnValue };
}

describe('makeRelativeFn', () => {
  beforeEach(run);

  test('exports a function called makeRelativeFn', () => {
    expect(makeRelativeFn).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls path.relative', () => {
    expect(path.relative).toHaveBeenCalledWith('{{FROM}}', '{{TO}}');
  });
});
