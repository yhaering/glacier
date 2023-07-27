import { makeResolveFn } from './makeResolveFn';
import { assertAbsolutePath } from '../assertions/assertAbsolutePath';
import { normalizePath } from '../functions/normalizePath';

jest.mock('../assertions/assertAbsolutePath', () => ({
  assertAbsolutePath: jest.fn()
}));

jest.mock('../functions/normalizePath', () => ({
  normalizePath: jest.fn().mockReturnValue('{{NORMALIZED_PATH}}')
}));

function run(from: string, ...segments: string[]) {
  const fn = makeResolveFn();
  const returnValue = fn(from, ...segments);
  return { fn, returnValue };
}

describe('makeResolveFn', () => {
  beforeEach(() => {
    run('/');
  });

  test('exports a function called makeResolveFn', () => {
    expect(makeResolveFn).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run('/');
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls assertAbsolutePath', () => {
    expect(assertAbsolutePath).toHaveBeenCalledWith('/');
  });

  test('calls normalizePath', () => {
    expect(normalizePath).toHaveBeenCalledWith('/');
  });

  test('returns return value of normalizePath', () => {
    const { returnValue } = run('/');
    expect(returnValue).toBe('{{NORMALIZED_PATH}}');
  });

  test('resolves / and a', () => {
    run('/', 'a');
    expect(normalizePath).toHaveBeenCalledWith('//a');
  });

  test('resolves / and a and b', () => {
    run('/', 'a', 'b');
    expect(normalizePath).toHaveBeenCalledWith('//a/b');
  });

  test('resolves /a and b and c', () => {
    run('/a', 'b', 'c');
    expect(normalizePath).toHaveBeenCalledWith('/a/b/c');
  });

  test('resets path if segment is absolute', () => {
    run('/a', '/b', 'c');
    expect(normalizePath).toHaveBeenCalledWith('//b/c');
  });
});
