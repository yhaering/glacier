import { makeFormatFn } from './makeFormatFn';
import path from 'node:path';
import { fakeParsedPath } from '../../../../test/fakes/fakeParsedPath';

jest.mock('node:path');

function run() {
  const fn = makeFormatFn();
  const parsedPath = fakeParsedPath();
  const returnValue = fn(parsedPath);
  return { fn, returnValue };
}

describe('makeFormatFn', () => {
  beforeEach(run);

  test('exports a function called makeFormatFn', () => {
    expect(makeFormatFn).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls path.relative', () => {
    const parsedPath = fakeParsedPath();
    expect(path.format).toHaveBeenCalledWith(parsedPath);
  });
});
