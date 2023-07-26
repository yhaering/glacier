import { makeResolveFn } from './makeResolveFn';
import path from 'node:path';

jest.mock('node:path');

function run() {
  const fn = makeResolveFn();
  const returnValue = fn('{{FROM}}', '{{SEG1}}', '{{SEG2}}');
  return { fn, returnValue };
}

describe('makeResolveFn', () => {
  beforeEach(run);

  test('exports a function called makeResolveFn', () => {
    expect(makeResolveFn).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls path.resolve', () => {
    expect(path.resolve).toHaveBeenCalledWith(
      '{{FROM}}',
      '{{SEG1}}',
      '{{SEG2}}'
    );
  });
});
