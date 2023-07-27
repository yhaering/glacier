import { makeRelativeFn } from './makeRelativeFn';
import { assertAbsolutePath } from '../assertions/assertAbsolutePath';

jest.mock('../assertions/assertAbsolutePath', () => ({
  assertAbsolutePath: jest.fn()
}));

function run(from = '/a', to = '/b') {
  const fn = makeRelativeFn();
  const returnValue = fn(from, to);
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

  test('calls assertAbsolutePath', () => {
    expect(assertAbsolutePath).toHaveBeenCalledWith('/a');
    expect(assertAbsolutePath).toHaveBeenCalledWith('/b');
  });

  test('return relative path for same paths', () => {
    const { returnValue } = run('/home/user', '/home/user');
    expect(returnValue).toBe('');
  });

  test('return relative path for sub-paths', () => {
    const { returnValue } = run('/users', '/users/home');
    expect(returnValue).toBe('home');
  });

  test('return relative path for nested sub-paths', () => {
    const { returnValue } = run('/users', '/users/home/index.txt');
    expect(returnValue).toBe('home/index.txt');
  });

  test('return relative path for parent path', () => {
    const { returnValue } = run('/users', '/home');
    expect(returnValue).toBe('../home');
  });

  test('return relative path for nested parent path', () => {
    const { returnValue } = run('/users/home', '/tmp');
    expect(returnValue).toBe('../../tmp');
  });
});
