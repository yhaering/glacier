import { normalizePath } from './normalizePath';
import { assertAbsolutePath } from '../assertions/assertAbsolutePath';

jest.mock('../assertions/assertAbsolutePath', () => ({
  assertAbsolutePath: jest.fn()
}));

function run(path = '/') {
  const returnValue = normalizePath(path);
  return { returnValue };
}

describe('normalizePath', () => {
  beforeEach(run);

  test('exports a function called normalizePath', () => {
    expect(normalizePath).toBeInstanceOf(Function);
  });

  test('calls assertAbsolutePath', () => {
    expect(assertAbsolutePath).toHaveBeenCalledWith('/');
  });

  test('normalizes double slashes', () => {
    const { returnValue } = run('//a//b/c//d');
    expect(returnValue).toBe('/a/b/c/d');
  });

  test('normalizes current directory notation', () => {
    const { returnValue } = run('/a/./b/c');
    expect(returnValue).toBe('/a/b/c');
  });

  test('normalizes parent directory notation', () => {
    const { returnValue } = run('/a/b/../c');
    expect(returnValue).toBe('/a/c');
  });

  test('normalizes multiple parent directory notation', () => {
    const { returnValue } = run('/a/b/../../../c');
    expect(returnValue).toBe('/c');
  });
});
