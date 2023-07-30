import { isPropertyOf } from './isPropertyOf';

function run(key = '{{KEY}}') {
  const returnValue = isPropertyOf({ '{{KEY}}': '{{VALUE}}' }, key);
  return { returnValue };
}

describe('isPropertyOf', () => {
  beforeEach(run);

  test('exports a function called isPropertyOf', () => {
    expect(isPropertyOf).toBeInstanceOf(Function);
  });

  test('returns true if key exists in object', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if key does not exist in object', () => {
    const { returnValue } = run('{{UNKNOWN}}');
    expect(returnValue).toBe(false);
  });
});
