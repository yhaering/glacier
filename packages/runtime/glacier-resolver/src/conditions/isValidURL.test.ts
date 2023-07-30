import { isValidURL } from './isValidURL';

function run(url = 'http://localhost') {
  const returnValue = isValidURL(url);
  return { returnValue };
}

describe('isValidURL', () => {
  beforeEach(run);

  test('exports a function called isValidURL', () => {
    expect(isValidURL).toBeInstanceOf(Function);
  });

  test('returns true for http URLs', () => {
    const { returnValue } = run('http://localhost');
    expect(returnValue).toBe(true);
  });

  test('returns true for https URLs', () => {
    const { returnValue } = run('https://localhost');
    expect(returnValue).toBe(true);
  });

  test('returns true for file URLs', () => {
    const { returnValue } = run('file://localhost');
    expect(returnValue).toBe(true);
  });

  test('returns false for invalid URLs', () => {
    const { returnValue } = run('localhost');
    expect(returnValue).toBe(false);
  });
});
