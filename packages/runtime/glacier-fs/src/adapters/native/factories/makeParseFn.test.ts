import { makeParseFn } from './makeParseFn';
import path from 'node:path';

jest.mock('node:path');

function run() {
  const fn = makeParseFn();
  const returnValue = fn('{{PATH}}');
  return { fn, returnValue };
}

describe('makeParseFn', () => {
  beforeEach(run);

  test('exports a function called makeParseFn', () => {
    expect(makeParseFn).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls path.relative', () => {
    expect(path.parse).toHaveBeenCalledWith('{{PATH}}');
  });
});
