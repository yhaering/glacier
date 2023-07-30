import { isRealPath } from './isRealPath';

function run(url = '/test') {
  const returnValue = isRealPath(url);
  return { returnValue };
}

describe('isRealPath', () => {
  beforeEach(run);

  test('exports a function called isRealPath', () => {
    expect(isRealPath).toBeInstanceOf(Function);
  });

  test('returns true if path starts with  /', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns true if path starts with ./', () => {
    const { returnValue } = run('./test');
    expect(returnValue).toBe(true);
  });

  test('returns true if path starts with ../', () => {
    const { returnValue } = run('../test');
    expect(returnValue).toBe(true);
  });

  test('returns false if url is not a path', () => {
    const { returnValue } = run('test');
    expect(returnValue).toBe(false);
  });
});
